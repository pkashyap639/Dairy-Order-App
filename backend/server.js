const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Mongo Connected"))
  .catch((err) => console.error("MongoDB Connection Error: ", err));

app.get("/api/health", (req, res) => {
  res.json({
    status: "OK",
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server is Running"));
