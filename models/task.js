const mongoose = require('mongoose')
const Schema = mongoose.Schema

const taskSchema = new Schema(
  {
    projectId: {
      type: Schema.Types.ObjectId,
      ref: 'Project'
    },
    taskName: {
      type: String,
      required: true,
      maxlength: 100
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User' 
    },
    description: {
      type: String,
      maxlength: 200
    },
    completed: {
      type: Boolean,
      default: false
    },
    reviewed: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
)

module.exports = taskSchema
