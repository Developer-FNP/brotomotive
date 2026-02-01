const express = require("express");
const { validationResult } = require("express-validator");
require("dotenv").config();

const { validateForm } = require("../validations/formValidation");

const router = express.Router();

// GET route to verify API is alive
router.get("/", (req, res) => {
  res.json({ message: "API is working!" });
});

// POST route for form submission
router.post("/", validateForm, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.error("Validation failed:", errors.array());
    return res.status(400).json({ errors: errors.array() });
  }

  const {
    leadLabel,
    fullName,
    phone,
    email,
    zip,
    year,
    make,
    model,
    part,
    vin,
    browser,
    remarks,
  } = req.body;

  // Prepare email HTML
  // Prepare simple email content
  const emailText = `
New Lead Submission - Brotomotive

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

CUSTOMER INFORMATION
Full Name: ${fullName}
Phone: ${phone}
Email: ${email}
Zip Code: ${zip}

VEHICLE DETAILS
Year: ${year}
Make: ${make}
Model: ${model}
VIN: ${vin || "Not Provided"}

REQUESTED PART
Part: ${part}

${remarks ? `REMARKS\n${remarks}\n` : ""}
ADDITIONAL INFO
Lead Source: ${leadLabel}
Browser: ${browser || "Not Provided"}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Submitted: ${new Date().toLocaleString("en-US", { timeZone: "America/New_York" })} EST
`.trim();

  // Prepare mail options
  const mailOptions = {
    from: `"${leadLabel}" <${process.env.EMAIL_USER}>`,
    to: "leads@fnpautoparts.com",
    replyTo: email,
    subject: `New Lead: ${fullName} - ${part}`,
    html: emailText,
  };

  try {
    // ✅ Call Vercel email service
    const response = await fetch(process.env.VERCEL_EMAIL_SERVICE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.EMAIL_SERVICE_API_KEY,
      },
      body: JSON.stringify(mailOptions),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("❌ Email service error:", errorText);
      throw new Error(`Email service failed: ${response.status}`);
    }

    const result = await response.json();
    console.log("✅ Email sent successfully via Vercel:", result.messageId);

    res.status(200).json({
      success: true,
      message: "Form submitted and email sent successfully!",
    });
  } catch (error) {
    console.error("❌ Error sending email:", error.message);
    res.status(500).json({
      error: "Failed to send email",
      details: error.message,
    });
  }
});

module.exports = router;
