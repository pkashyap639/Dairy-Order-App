const DairyProduct = require("../models/DairyProduct.model");
const { cache } = require("../cache/cache.js");

// get All Products
const getAllProducts = async (req, res) => {
  try {
    // check cache first
    const cachedProducts = cache.get("Data");
    if (cachedProducts) {
      console.log("Returning From Cache");
      return res.status(200).json({
        products: cachedProducts,
        fromCache: true,
      });
    }
    // cache miss - fetch from DB
    const products = await DairyProduct.find().sort({ cat_id: 1 });
    if (products.length == 0) {
      return res.status(400).json({
        message: "No Prodcuts in List",
      });
    }
    cache.set("Data", products);
    res.status(200).json({
      products,
      fromCache: false,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllProducts,
};
