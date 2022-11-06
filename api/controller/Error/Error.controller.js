const logger = require("../../utils/Logger/Logger");

const errorController = (err, req, res, next) => {
  console.log(err);
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  if (`${err.statusCode}`.startsWith("5")) {
    logger.error({
      date: `${new Date().getDate()}-${
        new Date().getMonth() + 1
      }-${new Date().getFullYear()}`,
      error: err.stack,
    });
  }

  return res.status(err.statusCode).json({
    status: err.status,
    statusCode: err.statusCode,
    errorCode: err.errorCode || null,
    message: err.message,
  });
};

module.exports = errorController;
