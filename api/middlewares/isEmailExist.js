const User = require("../model/Users/User");
const AppError = require("../utils/Error/AppError");
const logger = require("../utils/Logger/Logger");

const isEmailExists = async function (req, res, next) {
  try {
    const email = req.body.email;
    const user = await User.findOne({ email: email });

    if (!user) {
      return next();
    }

    return next(new AppError(400, undefined, "Email already exists !"));
  } catch (error) {
    logger.error({
      level: "error",
      message: error,
      date: new Date().toISOString(),
    });
    return next(new AppError(500, undefined, "Something went wrong !"));
  }
};

module.exports = isEmailExists;
