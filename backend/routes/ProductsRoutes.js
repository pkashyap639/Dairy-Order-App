const express = require("express");
const router = express.Router();
const { getAllProducts } = require("../controllers/ProductController");
//import middleware
const checkMiddleware = require("../middleware/SimpleMiddleware");
router.get("/getAllProducts", checkMiddleware, getAllProducts); // Get /api/products

module.exports = router;
