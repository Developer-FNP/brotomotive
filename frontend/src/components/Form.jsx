import React, { useEffect, useState } from "react";
import "./Form.css";

const parts = [
  "ABS Parts",
  "Accessory Tool Box",
  "Accessory, Work Light",
  "Aftertreatment Control Module (ACM)",
  "Air Compressor",
  "Air Conditioner Compressor Clutch",
  "Air Dryer",
  "Air Hose",
  "Air Spring",
  "Air Tank",
  "Air Valve",
  "Alternator",
  "APU (Auxiliary Power Unit)",
  "APU, Condenser",
  "APU, Condenser Fan",
  "APU, Control Panel",
  "APU, Engine",
  "APU, Fuel Line",
  "APU, Fuel Pump",
  "APU, Generator",
  "APU, Inverter",
  "APU, Power Module",
  "APU, Wiring Harness",
  "Auxiliary Transmission",
  "Axle Assembly",
  "Axle Assembly, Front",
  "Axle Housing (Front / Rear)",
  "Axle Housing (Rear / Rear)",
  "Axle Shaft",
  "Battery",
  "Battery Box",
  "Battery Box Cover",
  "Bearing",
  "Bed Mat",
  "Beverage Body",
  "Box (Pickup Bed)",
  "Bracket",
  "Bracket, Fuel Tank",
  "Brackets, Misc",
  "Brake Actuator / Chamber",
  "Brake Assembly",
  "Brake Control Module (ABS)",
  "Brake Drum",
  "Brake Parts Misc.",
  "Brake, Shoes",
  "Brakes Backing Plate / Spider",
  "Bumper Assembly, Rear",
  "Bumper Bracket, Front",
  "Cab Control Module CECU",
  "Cab Jack",
  "Cab Suspension",
  "Caliper",
  "Carrier and Cap (Front)",
  "Carrier and Cap (Rear)",
  "Carrier Set (Front and Rear)",
  "Catalytic Converter",
  "Chain Holder",
  "Chassis Fairing",
  "Collision Avoidance",
  "Cranes / Booms",
  "CutOff Assembly",
  "Deckplate",
  "DEF / Urea Tank",
  "DEF Doser",
  "DEF Misc Parts",
  "DEF Sensors",
  "DEF Tank",
  "Differential Bearing Kit",
  "Differential Case",
  "Differential Seal",
  "Differential Side Gear",
  "Differential Thrust Washer",
  "Differential, Misc. Part",
  "Diff & Pd Clutch Collar",
  "Diff & Pd Shift Fork",
  "Diff (Inter-Axle) Component",
  "Diff (Main) Parts & Assembly",
  "Diff Adjuster",
  "Diff Clutch Plate",
  "Diff Planetary Gear",
  "Diff Sun Gear",
  "DOC",
  "Door",
  "Doser Pump",
  "DPF Assembly Less Filters",
  "DPF Covers",
  "DPF Diesel Particulate Filter",
  "DPF Filter",
  "DPF Gasket",
  "DPF Inlet",
  "DPF Outlet",
  "Drag Link",
  "Drive Shaft",
  "Drive Shaft, Front",
  "Driveshaft Carrier Bearing",
  "Driveshaft Tubing",
  "Driveshaft, Misc Parts",
  "Driveshaft, Slip Stub Shaft",
  "Driveshaft, Slip Yoke",
  "Driveshaft, Weld Yoke",
  "Driveshaft, Yoke",
  "Dumpbody",
  "Dumpbody Components",
  "Elbow",
  "Electric Tarp Conversion",
  "Electrical, Misc. Parts",
  "Electronic Chassis Control Modules",
  "Electronic DPF Control Module",
  "Emissions Sensor",
  "End Yoke",
  "Equipment",
  "Exhaust Assembly",
  "Exhaust Bellows",
  "Exhaust Clamp",
  "Exhaust Guard",
  "Exhaust Manifold",
  "Exhaust Misc",
  "Exhaust Reducer",
  "Exhaust Y Pipe",
  "Fastener",
  "Feedbody",
  "Fender (Accessory)",
  "Fender Mount Hardware [kit]",
  "Fifth Wheel",
  "Fifth Wheel Kit",
  "Fifth Wheel Part",
  "Filter, DEF",
  "Filter, Hydraulic",
  "Fitting",
  "Flatbed",
  "Flex Pipe",
  "Fluids",
  "Fork",
  "Frame",
  "Frame Horn",
  "Front Differential Assembly",
  "Fuel Cap",
  "Fuel Filler Door",
  "Fuel Heater",
  "Fuel Tank",
  "Fuel Tank Sending Unit",
  "Fuel Tank Strap",
  "Gasket, Axle",
  "Grainbody",
  "Grainbody Components",
  "Grille Guard",
  "Grille Guard Installation parts",
  "Hay Rack",
  "Headache Rack (Cab Rack)",
  "Heater, Auxiliary",
  "Hitch Accessories",
  "Hoist",
  "Hooklift",
  "Hooklift Components",
  "Hub",
  "Hub Cap",
  "HVAC Unit",
  "Hydraulic Controls",
  "Hydraulic Cylinder",
  "Hydraulic Fitting",
  "Hydraulic Hose",
  "Hydraulic Pump",
  "Hydraulic Relief Valve",
  "Hydraulic Tank / Reservoir",
  "Ice Control",
  "Ice Control Components",
  "Jack",
  "King Pin Set",
  "Ladder",
  "Landing Gear",
  "Latches and Locks",
  "Leaf Spring, Front",
  "Leaf Spring, Helper",
  "Leaf Spring, Rear",
  "Liftgate",
  "Liftgate Misc Parts",
  "Master Cylinder",
  "Mudflap",
  "Mudflap Hanger",
  "Muffler",
  "Packer / Refuse Body",
  "Pipe",
  "Plow",
  "Power Steering Control Valve",
  "Power Steering Reservoir",
  "PTO",
  "Pwr Divider Drive Gear",
  "Pwr Divider Driven Gear",
  "Pwr Divider Idler Gear",
  "Pwr Divider Thru Shaft",
  "Ramp",
  "Rear Differential Assembly",
  "Receiver Hitch",
  "Reefer Unit",
  "Reeferbody",
  "Refrigerator",
  "Ring Gear and Pinion",
  "Roll back",
  "Roll Off Hoist",
  "Running Board",
  "Safety and Warning",
  "SCR Catalyst",
  "Seat Armrest",
  "Seat Belt Assembly",
  "Seat Cushion",
  "Seat Misc Parts",
  "Seat, Air Ride",
  "Seat, Mechanical Suspension",
  "Seat, non-Suspension",
  "Shock Absorber",
  "Side Marker Lamp, Rear",
  "Slack Adjuster",
  "Spindle / Knuckle, Front",
  "Spring Pin",
  "Spreader",
  "Stack",
  "Stability Sensor",
  "Stabilizer Bar",
  "Steering (Pitman) Arm",
  "Steering Assist Cylinder",
  "Steering Column",
  "Steering Gear / Rack",
  "Steering Gear Seal Kit",
  "Steering Pump",
  "Steering Pump Seal Kit",
  "Steering Shaft",
  "Steering Wheel",
  "Step (Accessory)",
  "Step (Frame, Fuel Tank, Fairing)",
  "Suspension",
  "Suspension Air Spring Pedestal",
  "Suspension Bushing",
  "Suspension Crossmember / K-Frame",
  "Suspension Fastener",
  "Suspension Spring Equalizer",
  "Suspension Spring Hanger",
  "Suspension, Misc. Part",
  "Suspension, U-Bolt",
  "Tag / Pusher Axle",
  "Tag / Pusher Components",
  "Tail Lamp",
  "Tail Panel",
  "Tailgate / Decklid",
  "Tanker",
  "Tarp",
  "Tarp Components",
  "Telematics",
  "Tie Rod",
  "Tire and Rim",
  "Tires",
  "Tool Box",
  "Tools",
  "Tools Cleaning",
  "Torque Rod",
  "Tow Hook",
  "Trailer Axle",
  "Trailer Connector",
  "Trailer Corner Caps",
  "Trailer Cossmember",
  "Trailer Panel",
  "Trailer Roofing",
  "Trailer Side Chute",
  "Trailer Step",
  "Trailer Suspension",
  "Trailer, Accessories",
  "Trailer, Cargo Control",
  "Trailer, Hitch",
  "Trailer, Lighting",
  "Trailer, Misc. Parts",
  "Transfer Case Assembly",
  "Transfer Case Motor",
  "Truck Equipment, Tarp Motors",
  "Turbo Pipe",
  "Two Speed Motor",
  "Universal Joint",
  "Utilitybody",
  "Vacuum Booster",
  "Van Body",
  "Vibrator",
  "Wear Sleeve",
  "Wet Kit",
  "Wheel",
  "Wheel Balancer",
  "Wheel Bearing",
  "Wheel Cover",
  "Wheel Fastener",
  "Wheel Stud",
  "Yoke",
  "Yoke, Rr Diff"
].sort();

const Form = () => {
  const [truckData, setTruckData] = useState({});
  const [smsConsent, setSmsConsent] = useState(false); // SMS consent state
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
    vin: "",
    browser: window.navigator.userAgent,
    remarks: ""
  });

  const [showMakeDropdown, setShowMakeDropdown] = useState(false);
  const [showModelDropdown, setShowModelDropdown] = useState(false);
  const [errors, setErrors] = useState({});
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    fetch("/truck.json")
      .then((res) => res.json())
      .then((data) => setTruckData(data))
      .catch((err) => console.error("Error loading truck data:", err));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "fullName" && /[^a-zA-Z\s]/.test(value)) return;
    if ((name === "phone" || name === "zip") && /[^0-9]/.test(value)) return;
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
    m.toLowerCase().includes(formData.make.toLowerCase())
  );
  const modelsForMake = truckData[formData.make] || [];
  const filteredModels = modelsForMake.filter((mod) =>
    mod.toLowerCase().includes(formData.model.toLowerCase())
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});

    try {
      const response = await fetch("/api/form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        const errorMessages = {};
        let alertMessage = "Please fix the following:\n\n";

        if (result.errors) {
          result.errors.forEach((error) => {
            errorMessages[error.param] = error.msg;
            alertMessage += `- ${error.msg}\n`;
          });
        }

        setErrors(errorMessages);
        alert(alertMessage);
        return;
      }

      alert("✅ Form submitted successfully!");
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
        vin: "",
        browser: window.navigator.userAgent,
        remarks: ""
      });
      setSmsConsent(false); // Reset checkbox
    } catch (err) {
      console.error("Submission failed:", err);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="form-wrapper">
      <form className="form-box" onSubmit={handleSubmit}>
        <div className="form-section-title">Contact Info</div>
        <div className="form-row four-cols">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name*"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone No.*"
            value={formData.phone}
            onChange={handleChange}
            required
          />
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
          <select name="year" value={formData.year} onChange={handleChange} required>
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
              onBlur={() => setTimeout(() => setShowModelDropdown(false), 200)}
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
            <option value="" disabled>Choose Part*</option>
            {parts.map((part) => (
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
        <div className="checkbox-container">
          <input
            type="checkbox"
            id="smsConsent"
            checked={smsConsent}
            onChange={(e) => setSmsConsent(e.target.checked)}
            className="consent-checkbox"
          />
          <label htmlFor="smsConsent" className="consent-label">
            By providing your phone number, you agree to receive a text message from Brotomotive. Message and Data rates may apply, Message frequency varies. To stop receiving messages, reply 'STOP' at any time. For more information, reply 'HELP'. <a href="/privacy">Privacy Policy</a> & <a href="/terms">Terms & Conditions</a>
          </label>
        </div>

        <input type="hidden" name="browser" value={formData.browser} />
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default Form;