const express = require("express");
const cors = require("cors");
const connectDB = require("./config/Db.js");
require("dotenv").config();

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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server is Running"));
