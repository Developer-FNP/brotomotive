// server.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const formRoutes = require("./src/routes/formRoutes");

const app = express();

// ✅ CORS configuration from environment variables
const allowedOrigins = process.env.ALLOWED_ORIGINS 
  ? process.env.ALLOWED_ORIGINS.split(',').map(origin => origin.trim())
  : [
      'http://localhost:5173',
      'http://localhost:5175',
      'http://localhost:5004',
    ];

console.log('🔒 Allowed CORS Origins:', allowedOrigins);

app.use(cors({
  origin: (origin, callback) => {
    // Allow requests with no origin (like mobile apps, Postman, or curl)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      console.warn(`❌ CORS blocked origin: ${origin}`);
      callback(new Error('Not allowed by CORS'));
    }
  },
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
app.use("/form", formRoutes);

// ✅ 404 Handler
app.use((req, res) => {
  res.status(404).json({
    error: 'Not Found',
    message: `Route ${req.method} ${req.url} not found`,
  });
});

// ✅ Global Error Handler
app.use((err, req, res, next) => {
  console.error('[UNHANDLED ERROR]', err.stack);
  res.status(500).json({
    error: 'Internal Server Error',
    message: process.env.NODE_ENV === 'production' 
      ? 'Something went wrong' 
      : err.message,
  });
});

// ✅ Start Server
const PORT = process.env.PORT || 5004;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚗 Brotomotive backend started on port ${PORT}`);
  console.log(`📡 Environment: ${process.env.NODE_ENV || 'development'}`);
});