const AppError = require("../../utils/Error/AppError");
const logger = require("../../utils/Logger/Logger");
const validator = require("validator");
const Contact = require("../../model/Contact/Contact");

const addQuery = async function (req, res, next) {
  try {
    const { fullname, subject, email, query } = req.body;

    if (!fullname || !/^[a-z\ A-Z]{3,}$/gi.test(fullname)) {
      return next(new AppError(400, undefined, "invalid fullname !"));
    }

    if (!subject || subject === "") {
      return next(new AppError(400, undefined, "please enter subject !"));
    }

    if (!email || !validator.isEmail(email)) {
      return next(new AppError(400, undefined, "invalid email address !"));
    }

    if (!query || query === "") {
      return next(new AppError(400, undefined, "please enter query !"));
    }

    const newContact = new Contact({
      fullname: fullname,
      subject: subject,
      email: email,
      query: query,
    });

    await newContact.save();

    return res.status(201).json({
      status: "ok",
      statusCode: 201,
      message: "query submited !",
    });
  } catch (error) {
    console.log(error);
    logger.error({
      level: "error",
      message: error.stack,
      date: new Date().toISOString(),
    });

    return next(
      new AppError(500, undefined, "Something went wrong while adding product")
    );
  }
};

module.exports = { addQuery };
