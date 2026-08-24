const nodeCache = require("node-cache");

const cache = new nodeCache({
  stdTTL: 600,
  checkPeriod: 120,
  useClones: true,
});

const setupCache = () => {
  if (!(cache instanceof nodeCache)) {
    throw new Error("Cache failed to initialize");
  }
  console.log("Cache Created");
};

module.exports = { setupCache, cache };
