const Router = require('express').Router()
const passport = require('passport')

const projectRouter = require('./projectRouter')
const taskRouter = require('./taskRouter')
const teamRouter = require('./teamRouter')
const userRouter = require('./userRouter')

Router.use('/project', projectRouter)
Router.use('/task', taskRouter)
Router.use('/team', teamRouter)
Router.use('/user', userRouter)

Router.get('/auth/google', passport.authenticate(
    'google', 
    {
        scope: ['profile', 'email']
    }
))
Router.get('/oauth2callback', passport.authenticate(
    'google',
    {
        successRedirect: 'http://localhost:5173/',
        failureRedirect: '/'
    }
))
Router.get('/logout', function(req, res){
    req.logout(function() {
        res.redirect('/')
    })
})

module.exports = Router