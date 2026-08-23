const express = require("express");
const cors = require("cors");
const connectDB = require("./config/Db.js");
require("dotenv").config();
const productRoutes = require("./routes/ProductsRoutes");
const app = express();

app.use(cors());
app.use(express.json());

//Connect DB
connectDB();

app.get("/api/health", (req, res) => {
  res.json({
    status: "OK",
  });
});

// Mounted Routes
app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server is Running"));
