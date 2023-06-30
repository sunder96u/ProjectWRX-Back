const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT || 3001
const db = require('./db')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.get('/', () => {
      console.log('hello world')
})
app.listen(PORT, () => console.log(`Server running on ${PORT}`))