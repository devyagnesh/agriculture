const express = require("express");
const contactRoute = express.Router();
const { addQuery } = require("../../controller/Contact/Contact");

contactRoute.post("/query", addQuery);

module.exports = contactRoute;
