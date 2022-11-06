const mongoose = require("mongoose");
const validatorUtil = require("validator");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    firstname: {
      lowercase: true,
      required: true,
      type: String,
      trim: true,

      validate: {
        validator: function (v) {
          return /[a-zA-Z]{3,}$/.test(v);
        },
        message: (props) => `${props.value} is not a valid first name!`,
      },
    },

    lastname: {
      lowercase: true,
      required: true,
      type: String,
      trim: true,
      validate: {
        validator: function (v) {
          return /[a-zA-Z]{3,}$/.test(v);
        },
        message: (props) => `${props.value} is not a valid last name!`,
      },
    },

    email: {
      lowercase: true,
      required: true,
      type: String,
      trim: true,

      validate: {
        validator: function (v) {
          return validatorUtil.isEmail(v);
        },
        message: (props) => `${props.value} is not a valid email address !`,
      },
    },

    password: {
      type: String,
      required: true,
    },

    isAdmin: {
      type: Boolean,
      enum: [true, false],
      default: false,
    },

    createdAt: {
      type: Date,
      required: true,
      default: Date.now(),
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function () {
  const user = this;

  if (user.isModified("password")) {
    const hashedPassword = await bcrypt.hash(user.password, 14);
    user.password = hashedPassword;
  }
});

const User = mongoose.model("User", userSchema);
module.exports = User;
