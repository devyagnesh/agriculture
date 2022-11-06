const express = require("express");
const UserRoute = express.Router();
const { signUp, login } = require("../../controller/User/UserController");

/****************Middleware functions****************/
const isEmailExists = require("../../middlewares/isEmailExist");

UserRoute.post("/signup", isEmailExists, signUp);
UserRoute.post("/login", login);

module.exports = UserRoute;
