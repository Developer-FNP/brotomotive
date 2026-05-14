import React, { useEffect, useState } from "react";
import "./Form.css";

const PART_OPTIONS = [
  "Used Engine",
  "Reman Engine",
  "Rebuilt Engine",
  "Used Transmission",
  "Reman Transmission",
  "Rebuilt Transmission",
  "Core Engine",
  "Core Transmission",
  "Others",
];

const LEAD_INTAKE_URL =
  "https://kindred-walrus-776.convex.site/api/v1/leads/intake";
const LEAD_INTAKE_TOKEN = "wsk_L_hp2E0YV2z-wwJ0AMpIt-Do";

const Form = () => {
  const [truckData, setTruckData] = useState({});
  const [_smsConsent, setSmsConsent] = useState(false);
  const [formData, setFormData] = useState({
    leadLabel: "BROTOMOTIVE",
    fullName: "",
    phone: "",
    email: "",
    zip: "",
    year: "",
    make: "",
    model: "",
    part: "",
    partOther: "",
    vin: "",
    browser: window.navigator.userAgent,
    remarks: "",
  });

  const [showMakeDropdown, setShowMakeDropdown] = useState(false);
  const [showModelDropdown, setShowModelDropdown] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [_errors, setErrors] = useState({});
  const [notifications, setNotifications] = useState([]);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    fetch("/truck.json")
      .then((res) => res.json())
      .then((data) => setTruckData(data))
      .catch((err) => console.error("Error loading truck data:", err));
  }, []);

  // Function to show notification
  const showNotification = (message, type = "info", duration = 3000) => {
    const id = Date.now();
    const newNotification = {
      id,
      message,
      type,
      duration,
    };

    setNotifications((prev) => [...prev, newNotification]);

    // Auto remove after duration
    setTimeout(() => {
      removeNotification(id);
    }, duration);

    return id;
  };

  // Function to remove notification
  const removeNotification = (id) => {
    setNotifications((prev) =>
      prev.filter((notification) => notification.id !== id),
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "fullName" && /[^a-zA-Z\s]/.test(value)) return;
    if ((name === "phone" || name === "zip") && /[^0-9]/.test(value)) return;
    // Clear partOther when the dropdown moves away from "Others"
    if (name === "part" && value !== "Others") {
      setFormData((prev) => ({ ...prev, part: value, partOther: "" }));
      return;
    }
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectMake = (make) => {
    setFormData((prev) => ({ ...prev, make, model: "" }));
    setShowMakeDropdown(false);
  };

  const handleSelectModel = (model) => {
    setFormData((prev) => ({ ...prev, model }));
    setShowModelDropdown(false);
  };

  const allMakes = Object.keys(truckData).sort();
  const filteredMakes = allMakes.filter((m) =>
    m.toLowerCase().includes(formData.make.toLowerCase()),
  );
  const modelsForMake = truckData[formData.make] || [];
  const filteredModels = modelsForMake.filter((mod) =>
    mod.toLowerCase().includes(formData.model.toLowerCase()),
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});

    // Require freeform part text when "Others" is selected
    if (formData.part === "Others" && !formData.partOther.trim()) {
      showNotification("Please specify the part you need.", "error");
      return;
    }

    setIsSubmitting(true);

    try {
      const params = new URLSearchParams(window.location.search);

      const body = {
        name: formData.fullName,
        email: formData.email?.trim().toLowerCase(),
        phone: formData.phone
          ? `+1 ${String(formData.phone).replace(/\D/g, "")}`
          : undefined,
        vehicleYear: formData.year,
        vehicleMake: formData.make,
        vehicleModel: formData.model,
        partType:
          formData.part === "Others"
            ? formData.partOther.trim()
            : formData.part,
        zip: formData.zip || undefined,
        vin: formData.vin || undefined,
        remarks: formData.remarks || undefined,
        source: "Website Lead",
        company: "Brotomotive Parts",
        disposition: "New Lead",
        // Tracking
        gclid: params.get("gclid") || undefined,
        msclkid: params.get("msclkid") || undefined,
        fbclid: params.get("fbclid") || undefined,
        utmSource: params.get("utm_source") || undefined,
        utmMedium: params.get("utm_medium") || undefined,
        utmCampaign: params.get("utm_campaign") || undefined,
        referrer: document.referrer || undefined,
        landingPage: window.location.href,
        browser: navigator.userAgent,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        submissionTime: new Date().toISOString(),
      };

      const response = await fetch(LEAD_INTAKE_URL, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${LEAD_INTAKE_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      let result = {};
      try {
        result = await response.json();
      } catch {
        // Non-JSON response — ignore
      }

      if (!response.ok) {
        const message =
          result.error ||
          result.message ||
          "Something went wrong. Please try again.";
        showNotification(message, "error", 5000);
        return;
      }

      // Show success notification
      showNotification("✅ Form submitted successfully!", "success");

      // Reset form
      setFormData({
        leadLabel: "BROTOMOTIVE",
        fullName: "",
        phone: "",
        email: "",
        zip: "",
        year: "",
        make: "",
        model: "",
        part: "",
        partOther: "",
        vin: "",
        browser: window.navigator.userAgent,
        remarks: "",
      });
      setSmsConsent(false);
    } catch (err) {
      console.error("Submission failed:", err);
      // Show error notification
      showNotification("❌ Something went wrong. Please try again.", "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Test function to verify notifications
  // const testNotification = () => {
  //   showNotification("This is a test notification! 🎉", 'info');
  // };

  return (
    <>
      {/* Custom Notification Container - Top Right Corner */}
      <div className="notification-container">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`notification notification-${notification.type}`}
          >
            <div className="notification-content">{notification.message}</div>
            <button
              className="notification-close"
              onClick={() => removeNotification(notification.id)}
            >
              ✕
            </button>
            <div
              className="notification-progress"
              style={{
                animationDuration: `${notification.duration}ms`,
              }}
            ></div>
          </div>
        ))}
      </div>

      <div className="form-wrapper">
        {/* Test button for notifications */}
        {/* <button 
          onClick={testNotification}
          className="notification-test-btn"
        >
          Test Notification
        </button> */}

        <form className="form-box" onSubmit={handleSubmit}>
          <div className="form-section-title">Contact Info</div>
          <div className="form-row four-cols">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name*"
              value={formData.fullName}
              onChange={handleChange}
              disabled={isSubmitting}
              required
            />
            <div className="phone-input-wrapper">
              <span className="phone-prefix">+1</span>
              <input
                type="tel"
                name="phone"
                placeholder="Phone No.*"
                value={formData.phone}
                onChange={handleChange}
                maxLength={10}
                inputMode="numeric"
                required
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email*"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="zip"
              placeholder="Zip Code*"
              value={formData.zip}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-section-title">Part Details</div>
          <div className="form-row three-cols">
            <select
              name="year"
              value={formData.year}
              onChange={handleChange}
              required
            >
              <option value="">Year*</option>
              {Array.from({ length: currentYear - 1979 }, (_, i) => {
                const year = currentYear - i;
                return (
                  <option key={year} value={year}>
                    {year}
                  </option>
                );
              })}
            </select>

            <div className="input-wrapper">
              <input
                id="make-input"
                type="text"
                name="make"
                placeholder="Make*"
                value={formData.make}
                onChange={(e) => {
                  handleChange(e);
                  setShowMakeDropdown(true);
                }}
                onFocus={() => setShowMakeDropdown(true)}
                onBlur={() => setTimeout(() => setShowMakeDropdown(false), 200)}
                required
              />
              {showMakeDropdown && (
                <div className="dropdown">
                  {filteredMakes.map((make) => (
                    <div
                      key={make}
                      onMouseDown={() => handleSelectMake(make)}
                      className="dropdown-item"
                    >
                      {make}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="input-wrapper">
              <input
                id="make-input"
                type="text"
                name="model"
                placeholder="Model*"
                value={formData.model}
                disabled={!formData.make}
                onChange={(e) => {
                  handleChange(e);
                  setShowModelDropdown(true);
                }}
                onFocus={() => formData.make && setShowModelDropdown(true)}
                onBlur={() =>
                  setTimeout(() => setShowModelDropdown(false), 200)
                }
                required
              />
              {showModelDropdown && (
                <div className="dropdown">
                  {filteredModels.map((model) => (
                    <div
                      key={model}
                      onMouseDown={() => handleSelectModel(model)}
                      className="dropdown-item"
                    >
                      {model}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="form-row two-cols">
            <select
              name="part"
              value={formData.part}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Choose Part*
              </option>
              {PART_OPTIONS.map((part) => (
                <option key={part} value={part}>
                  {part}
                </option>
              ))}
            </select>
            <input
              type="text"
              name="vin"
              value={formData.vin}
              onChange={handleChange}
              placeholder="VIN Number (Optional)"
            />
          </div>

          {formData.part === "Others" && (
            <div className="form-row one-col">
              <input
                type="text"
                name="partOther"
                placeholder="Please specify the part you need*"
                value={formData.partOther}
                onChange={handleChange}
                required
              />
            </div>
          )}

          <div className="form-row one-col">
            <input
              type="text"
              name="remarks"
              placeholder="Remarks (Optional)"
              value={formData.remarks}
              onChange={handleChange}
            />
          </div>

          {/* SMS Consent Checkbox */}

          <input type="hidden" name="browser" value={formData.browser} />
          <button type="submit" className="submit-btn" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <span className="spinner"></span>
                Submitting
              </>
            ) : (
              "Submit"
            )}
          </button>
        </form>
      </div>
    </>
  );
};

export default Form;
