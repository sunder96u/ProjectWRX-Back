const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT || 3001
const AppRouter = require('./routes/appRouter')
const db = require('./db')
const logger = require('morgan')
const session = require('express-session')
const cookieParser = require('cookie-parser')
const path = require('path')
const passport = require('passport')
require('dotenv')
require('./db')
require('./passport')

const app = express()

app.use(cors({
      origin: 'http://localhost:5173' 
    }))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use(session({
      secret: process.env.SECRET,
      resave: false,
      saveUninitialized: true
}))

//app.use(passport.initialize())
//app.use(passport.session())

app.use(function (req, res, next) {
      res.locals.user = req.user
      next()
})


app.get('/', (req, res) => {
      res.send(`Hello world`)
})

app.use('/api', AppRouter)

app.listen(PORT, () => console.log(`Server running on ${PORT}`))