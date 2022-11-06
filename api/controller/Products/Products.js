const Product = require("../../model/Products/Product");
const User = require("../../model/Users/User");
const multer = require("multer");
const logger = require("../../utils/Logger/Logger");
const jwt = require("jsonwebtoken");
const AppError = require("../../utils/Error/AppError");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    let extArray = file.mimetype.split("/");
    let extension = extArray[extArray.length - 1];
    cb(null, file.fieldname + "-" + (uniqueSuffix + `.${extension}`));
  },
});

const fileFilter = function (req, file, cb) {
  if (file.mimetype !== "image/jpeg") {
    return cb(
      null,
      new AppError(400, undefined, "only jpeg or jpg file type allowed")
    );
  }
  cb(null, true);
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
});

const addProduct = async function (req, res, next) {
  try {
    console.log(req.file);
    const uid = jwt.decode(req.cookies.auth_token);

    const user = await User.findById(uid.uid);
    if (!user) {
      return next(new AppError(404, undefined, "user not exists"));
    }

    const { name, description, price, quantity, token } = req.body;

    if (!name || name === "") {
      return next(new AppError(400, undefined, "product name required !"));
    }
    if (!description || description === "") {
      return next(
        new AppError(400, undefined, "product description  required !")
      );
    }
    if (!price || price === "") {
      return next(new AppError(400, undefined, "product price required !"));
    }
    if (!quantity || quantity === "") {
      return next(new AppError(400, undefined, "product quantity required !"));
    } else {
      const destination = req.file.destination.replace("./", "");
      const filename = req.file.filename;
      const finalImageDestination = `${req.protocol}://${req.hostname}:${
        process.env.PORT || 3001
      }/${destination}/${filename}`;

      const product = new Product({
        uid: uid.uid,
        name,
        description,
        price,
        quantity,
        imgurl: finalImageDestination,
      });

      const newProduct = await product.save();

      return res.status(200).json({
        status: "ok",
        statusCode: 201,
        message: "product added",
        product: newProduct._doc,
      });
    }
  } catch (error) {
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

const getAllProducts = async function (req, res, next) {
  try {
    const products = await Product.find({});
    if (!products) {
      return next(new AppError(400, undefined, "there is no product"));
    }

    return res.status(200).json(products);
  } catch (error) {
    logger.error({
      level: "error",
      message: error.stack,
      date: new Date().toISOString(),
    });

    return next(
      new AppError(
        500,
        undefined,
        "Something went wrong while fetching product"
      )
    );
  }
};

module.exports = {
  upload,
  getAllProducts,
  addProduct,
};
