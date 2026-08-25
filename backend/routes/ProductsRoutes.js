const express = require("express");
const router = express.Router();
const { getAllProducts } = require("../controllers/ProductController");
//import middleware
const checkMiddleware = require("../middleware/SimpleMiddleware");
const { setCache } = require("../middleware/CacheMiddleware");
router.get("/getAllProducts", setCache, getAllProducts); // Get /api/products

module.exports = router;
