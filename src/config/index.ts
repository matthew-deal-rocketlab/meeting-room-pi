export default {
  port: process.env.PORT || 3002,
  nodeEnv: process.env.NODE_ENV || "development",
  allowedOrigin: process.env.ALLOWED_ORIGIN || "http://localhost:3001",
};
