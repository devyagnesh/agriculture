const jwt = require("jsonwebtoken");
const AppError = require("../Error/AppError");

const verifyToken = function (req, res, next) {
  const token = req.cookies.auth_token;
  if (!token) {
    return next(new AppError(401, undefined, "You are not authenticated"));
  }

  jwt.verify(token, process.env.BACKEND_JWT_SECRET, (err, user) => {
    if (err) {
      return next(new AppError(403, undefined, "Token is not valid"));
    }

    req.user = user;

    return next();
  });
};

const verifyUser = function (req, res, next) {
  verifyToken(req, res, next, () => {
    {
      const uid = jwt.decode(req.cookies.auth_token).uid;
      if (req.user.uid === uid || req.user.isAdmin) {
        return next();
      } else {
        return next(createError(403, "you are not authorized"));
      }
    }
  });
};

const verifyAdmin = function (req, res, next) {
  try {
    const token = req.cookies.auth_token;
    const isAdmin = jwt.decode(token).isAdmin;
    console.log(isAdmin);
    jwt.verify(token, process.env.BACKEND_JWT_SECRET, (err, user) => {
      if (err) {
        return next(new AppError(403, undefined, "Token is not valid"));
      }
      req.user = user;
    });

    if (!isAdmin) {
      return next(new AppError(403, undefined, "you are not authorized"));
    }

    return next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = { verifyUser, verifyAdmin };
