const express = require("express");
const cors = require("cors");
require("dotenv").config();

const { connectDB, sequelize } = require("./config/db");
const User = require("./models/User"); // ensure model loaded
const authRoutes = require("./routes/auth.routes");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (_req, res) => res.send("EatToday Backend is running 🚀"));
app.use("/auth", authRoutes);

const PORT = process.env.PORT || 5000;

(async () => {
  await connectDB();
  await sequelize.sync(); // tạo bảng nếu chưa có
  app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
})();

