const mongoose = require('mongoose')
require('dotenv').config()
const mongoURI = process.env.DATABASE_URL
// `mongodb://localhost:27017/ProjectNexusDatabase`

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => {
    console.log('Successfully connected to MongoDB.')
  })
  .catch((e) => {
    console.error('Connection error', e.message)
  })
  
mongoose.set('debug', true)
const db = mongoose.connection

module.exports = db