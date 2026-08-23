const DairyProduct = require("../models/DairyProduct.model");

// get All Products
const getAllProducts = async (req, res) => {
  try {
    const products = await DairyProduct.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllProducts,
};
