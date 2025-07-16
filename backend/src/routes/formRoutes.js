// src/routes/formRoutes.js

const express = require("express");
const { validationResult } = require("express-validator");
const nodemailer = require("nodemailer");
require("dotenv").config();

const { validateForm } = require("../validations/formValidation");

const router = express.Router();

// Email transporter setup
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

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
  } = req.body;

  const mailOptions = {
    from: `"Brotomotive Inquiry" <${process.env.EMAIL_USER}>`,
    to: "leads@fnpautoparts.com",
    subject: "New Form Submission - Brotomotive",
    text:
      `Lead Source: ${leadLabel}\n` +
      `Full Name: ${fullName}\n` +
      `Phone: ${phone}\n` +
      `Email: ${email}\n` +
      `Zip Code: ${zip}\n` +
      `Year: ${year}\n` +
      `Make: ${make}\n` +
      `Model: ${model}\n` +
      `Part: ${part}\n` +
      `VIN: ${vin || "Not Provided"}\n` +
      `Browser: ${browser || "Not Provided"}\n`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);
    res.status(200).json({
      success: true,
      message: "Form submitted and email sent successfully!",
    });
  } catch (error) {
    console.error("Error sending email:", {
      message: error.message,
      response: error.response,
      code: error.code,
    });
    res.status(500).json({ error: "Failed to send email" });
  }
});

module.exports = router;
