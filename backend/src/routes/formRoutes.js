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
  const emailHTML = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; text-align: center; border-radius: 10px 10px 0 0; }
        .content { background: #f9f9f9; padding: 30px; border: 1px solid #ddd; }
        .section { margin-bottom: 25px; }
        .section-title { font-size: 16px; font-weight: bold; color: #667eea; margin-bottom: 10px; border-bottom: 2px solid #667eea; padding-bottom: 5px; }
        .info-row { margin: 8px 0; padding: 8px; background: white; border-radius: 5px; }
        .label { font-weight: bold; color: #555; display: inline-block; width: 120px; }
        .value { color: #333; }
        .footer { background: #333; color: white; text-align: center; padding: 15px; border-radius: 0 0 10px 10px; font-size: 12px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1 style="margin: 0;">🚗 New Brotomotive Lead</h1>
          <p style="margin: 5px 0 0 0; font-size: 14px;">Form Submission Alert</p>
        </div>
        
        <div class="content">
          <div class="section">
            <div class="section-title">👤 Customer Information</div>
            <div class="info-row"><span class="label">Full Name:</span> <span class="value">${fullName}</span></div>
            <div class="info-row"><span class="label">Phone:</span> <span class="value"><a href="tel:${phone}">${phone}</a></span></div>
            <div class="info-row"><span class="label">Email:</span> <span class="value"><a href="mailto:${email}">${email}</a></span></div>
            <div class="info-row"><span class="label">Zip Code:</span> <span class="value">${zip}</span></div>
          </div>

          <div class="section">
            <div class="section-title">🚗 Vehicle Details</div>
            <div class="info-row"><span class="label">Year:</span> <span class="value">${year}</span></div>
            <div class="info-row"><span class="label">Make:</span> <span class="value">${make}</span></div>
            <div class="info-row"><span class="label">Model:</span> <span class="value">${model}</span></div>
            <div class="info-row"><span class="label">VIN:</span> <span class="value">${vin || "Not Provided"}</span></div>
          </div>

          <div class="section">
            <div class="section-title">🔧 Requested Part</div>
            <div class="info-row"><span class="label">Part:</span> <span class="value"><strong>${part}</strong></span></div>
          </div>

          ${remarks ? `
          <div class="section">
            <div class="section-title">💬 Customer Remarks</div>
            <div class="info-row"><span class="value">${remarks}</span></div>
          </div>
          ` : ''}

          <div class="section">
            <div class="section-title">📊 Additional Info</div>
            <div class="info-row"><span class="label">Lead Source:</span> <span class="value">${leadLabel}</span></div>
            <div class="info-row"><span class="label">Browser:</span> <span class="value" style="font-size: 11px;">${browser || "Not Provided"}</span></div>
          </div>

          <div style="text-align: center; color: #888; font-size: 12px; margin-top: 15px;">
            📅 Submitted: ${new Date().toLocaleString("en-US", { timeZone: "America/New_York" })} EST
          </div>
        </div>

        <div class="footer">
          <p style="margin: 0;">Brotomotive Parts Inquiry System</p>
          <p style="margin: 5px 0 0 0;">Automated Lead Notification</p>
        </div>
      </div>
    </body>
    </html>
  `;

  // Prepare mail options
  const mailOptions = {
    from: `"${leadLabel}" <${process.env.EMAIL_USER}>`,
    to: "leads@fnpautoparts.com",
    replyTo: email,
    subject: `New Lead: ${fullName} - ${part}`,
    html: emailHTML,
  };

  try {
    // ✅ Call Vercel email service
    const response = await fetch(process.env.VERCEL_EMAIL_SERVICE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.EMAIL_SERVICE_API_KEY,
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
      details: error.message 
    });
  }
});

module.exports = router;