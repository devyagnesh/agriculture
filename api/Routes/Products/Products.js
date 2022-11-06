const express = require("express");
const ProductRoute = express.Router();
const {
  upload,
  getAllProducts,
  addProduct,
} = require("../../controller/Products/Products");

const { verifyAdmin } = require("../../utils/Auth/AuthVerification");

ProductRoute.post("/add", verifyAdmin, upload.single("img"), addProduct);
ProductRoute.get("/all", getAllProducts);

module.exports = ProductRoute;
