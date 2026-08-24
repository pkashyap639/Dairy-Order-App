const checkMiddleware = (req, res, next) => {
  console.log("Middleware Hit");
  next();
};

module.exports = checkMiddleware;
