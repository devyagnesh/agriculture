const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  fullname: {
    type: String,
    trim: true,
    required: true,
    lowercase: true,
  },

  subject: {
    type: String,
    trim: true,
    required: true,
    lowercase: true,
  },

  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },

  query: {
    type: String,
    trim: true,
    lowercase: true,
    required: true,
  },
});

const Contact = mongoose.model("Contacts", contactSchema);

module.exports = Contact;
