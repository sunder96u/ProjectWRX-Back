const mongoose = require('mongoose')
const Schema = mongoose.Schema

const projectSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      maxlength: 100
    },
    description: {
      type: String,
      maxlength: 200
    },
    taskId: {
      type: Schema.Types.ObjectId,
      ref: 'Task' 
    }
  },
  { timestamps: true }
)

module.exports = projectSchema
