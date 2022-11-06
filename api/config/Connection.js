const mongoose = require("mongoose");
const Logger = require("../utils/Logger/Logger");
const AppError = require("../utils/Error/AppError");

const Connect = async function (req, res, next) {
  try {
    const DB_URI = process.env.DATABASE;
    mongoose.connect(DB_URI);
    return next();
  } catch (error) {
    Logger.error({
      level: "error",
      message: error.stack,
      date: new Date().toISOString(),
    });
    return next(
      new AppError(
        500,
        undefined,
        "Something went wrong while connecting to backend"
      )
    );
  }
};

module.exports = Connect;
