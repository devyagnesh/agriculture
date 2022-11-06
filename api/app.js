require("dotenv").config();
const cors = require("cors");
const helmet = require("helmet");
const express = require("express");
const cookieParser = require("cookie-parser");
const connection = require("./config/Connection");
const AppError = require("./utils/Error/AppError");
const app = express();

const UserRoute = require("./Routes/User/User.route");
const ProductRoute = require("./Routes/Products/Products");
const ContactRoute = require("./Routes/Contacts/Contacts");

/****************Controller****************/
const errorController = require("./controller/Error/Error.controller");
const logger = require("../../Optics/src/utils/ErrorLogger");
/******************************************/

/***************Middlewares****************/
app.use("/uploads", express.static("uploads"));
app.use(express.json());
app.use(helmet());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(connection);
/*******************************************/

/****************Routes*********************/
app.use("/api/v1/user", UserRoute);
app.use("/api/v1/product", ProductRoute);
app.use("/api/v1/contact", ContactRoute);

/*******************************************/

app.all("*", (req, res, next) => {
  return next(new AppError(400, undefined, `Couldn't Find ${req.originalUrl}`));
});

/**
 * Global Error Handling Middleware
 */
app.use(errorController);

process.on("uncaughtException", (err, origin) => {
  return logger.error({
    level: "error",
    message: err.stack,
    origin: origin,
    date: new Date().toISOString(),
  });
});

module.exports = app;
