const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    uid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    name: {
      type: String,
      trim: true,
      lowercase: true,
      required: true,
    },

    description: {
      type: String,
      trim: true,
      lowercase: true,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    quantity: {
      type: Number,
      required: true,
    },

    imgurl: {
      type: String,
      required: true,
    },

    addedAt: {
      type: Date,
      required: true,
      default: Date.now(),
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
