const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      min: 2,
      maxlength: 50
    },
    lastName: {
      type: String,
      required: true,
      min: 2,
      maxlength: 50
    },
    email: {
      type: String,
      required: true,
      unique: true,
      maxlength: 50
    },
    picture: {
      type: String,
      default: ''
    },
    username: {
      type: String,
      required: true,
      unique: true,
      minlength: 3,
      maxlength: 20
    },
    password: {
      type: String,
      required: true,
      minlength: 6
    },
    birthday: {
      type: Date
    },
    googleId: {
      type: String,
    }
  },
  { timestamps: true }
)

module.exports = userSchema

