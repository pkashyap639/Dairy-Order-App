const { cache } = require("../cache/cache.js");

const setCache = (req, res, next) => {
  try {
    const cachedProducts = cache.get("Data");
    if (cachedProducts) {
      return res.status(200).json({ products: cachedProducts });
    }
    next();
  } catch (error) {
    res.status(500).json({ error: "Problem in populating data" });
  }
};

module.exports = { setCache };
