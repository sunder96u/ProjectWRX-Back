// const Router = require('express').Router()
// const passport = require('passport')

// Router.get('/auth/google', passport.authenticate(
//     'google', 
//     {
//         scope: ['profile', 'email']
//     }
// ))
// Router.get('/oauth2callback', passport.authenticate(
//     'google',
//     {
//         successRedirect: '/user',
//         failureRedirect: '/user'
//     }
// ))
// Router.get('/logout', function(req, res){
//     req.logout(function() {
//         res.redirect('/user')
//     })
// })