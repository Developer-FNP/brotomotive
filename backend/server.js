// server.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const formRoutes = require("./src/routes/formRoutes");

const app = express();

// ✅ CORS configuration
const allowedOrigins = [
  'https://brotomotive.com',
  'https://www.brotomotive.com',
  'http://localhost:5004',
  'http://localhost',
  'http://localhost:5173',
  'http://localhost:5175',
];

app.use(cors({
  origin: allowedOrigins,
  methods: ['GET', 'POST', 'OPTIONS'],
  credentials: true,
}));

// ✅ Middleware
app.use(express.json());

// ✅ Request Logger
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  console.log("Origin:", req.headers.origin);
  next();
});

// ✅ Health check route
app.get("/", (req, res) => {
  res.send("Brotomotive Backend is Running!");
});

// ✅ Routes
app.use("/api/form", formRoutes);

// ✅ Global Error Handler
app.use((err, req, res, next) => {
  console.error('[UNHANDLED ERROR]', err.stack);
  res.status(500).json({
    error: 'Internal Server Error',
    message: 'Something went wrong',
  });
});

// ✅ Start Server
const PORT = process.env.PORT || 5004; // You can change this if needed
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚗 Brotomotive backend started on port ${PORT}`);
});
