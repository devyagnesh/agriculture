const User = require("../../model/Users/User");
const AppError = require("../../utils/Error/AppError");
const validator = require("validator");
const logger = require("../../utils/Logger/Logger");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

/**
 *
 * @signUp create new user account
 */

const signUp = async function (req, res, next) {
  console.log("REQUEST BODY IS : ", req.body);
  try {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;

    if (!firstname || !/[a-zA-Z]{3,}$/gi.test(firstname)) {
      return next(new AppError(400, undefined, `invalid first name !`));
    }

    if (!lastname || !/[a-zA-Z]{3,}$/gi.test(lastname)) {
      return next(new AppError(400, undefined, `invalid last name !`));
    }

    if (!email || !validator.isEmail(email)) {
      return next(new AppError(400, undefined, `invalid email address !`));
    }

    if (!password || password.length < 8) {
      return next(
        new AppError(400, undefined, `password must be 8 characters long !`)
      );
    }

    if (!confirmPassword || confirmPassword !== password) {
      return next(
        new AppError(400, undefined, `password does not matched hey !`)
      );
    }

    const body = {
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: password,
    };

    const user = new User(body);
    const createdUser = await user.save();

    const token = jwt.sign(
      { uid: createdUser._id, isAdmin: createdUser._doc.isAdmin },
      process.env.BACKEND_JWT_SECRET
    );

    return res
      .cookie("auth_token", token, { httpOnly: true })
      .status(201)
      .json({
        status: "ok",
        statusCode: 201,
        message: "created !",
        token: token,
      });
  } catch (error) {
    logger.error({
      level: "error",
      message: error.stack,
      date: new Date().toISOString(),
    });

    return next(
      new AppError(500, undefined, "Something went wrong while signup")
    );
  }
};

const login = async function (req, res, next) {
  try {
    const email = req.body.email;
    const password = req.body.password;

    if (!email || !validator.isEmail(email)) {
      return next(new AppError(400, undefined, "Invalid email address !"));
    }

    if (!password) {
      return next(new AppError(400, undefined, "password required !"));
    }

    const user = await User.findOne({ email });

    if (!user) {
      return next(new AppError(400, undefined, "Invalid Credentials"));
    }

    const matchpass = await bcrypt.compare(password, user.password);
    if (!matchpass) {
      return next(new AppError(400, undefined, "Invalid Credentials"));
    }
    const token = jwt.sign(
      { uid: user._id, isAdmin: user._doc.isAdmin },
      process.env.BACKEND_JWT_SECRET
    );

    return res
      .cookie("auth_token", token, { httpOnly: true })
      .status(201)
      .json({
        status: "ok",
        statusCode: 201,
        message: "logged in",
        token: token,
      });
  } catch (error) {
    logger.error({
      level: "error",
      message: error.stack,
      date: new Date().toISOString(),
    });

    return next(
      new AppError(500, undefined, "Something went wrong while login")
    );
  }
};

module.exports = { signUp, login };
