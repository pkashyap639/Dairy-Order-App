const express = require("express");
const cors = require("cors");
const connectDB = require("./config/Db.js");
require("dotenv").config();
const productRoutes = require("./routes/ProductsRoutes");
const app = express();
const { setupCache, cache } = require("./cache/cache.js");

app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({
    status: "OK",
  });
});

// temporary cache endpoint
app.get("/api/cache", (req, res) => {
  res.json({
    keys: cache.keys(),
    stats: cache.getStats(),
  });
});

// Mounted Routes
app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await connectDB();
    setupCache();
    app.listen(PORT, () => console.log("Server is Running"));
  } catch (error) {
    console.log("failed to start application");
    process.exit(1);
  }
};
// connectDB();
startServer();
