const mongoose = require('mongoose')
const Schema = mongoose.Schema

const teamSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      min: 2, 
      maxlength: 50
    },
    description: {
      type: String,
      maxlength: 200
    },
    member: [
      {
      type: Schema.Types.ObjectId,
      ref: 'User' 
      }
    ],
    memberAdmin: [
      {
      type: Schema.Types.ObjectId,
      ref: 'User'
      }
    ],
    projects: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Project' 
      }
    ]
  },
  { timestamps: true }
)

module.exports = teamSchema
