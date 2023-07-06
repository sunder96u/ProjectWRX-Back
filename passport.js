const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy
const User = require('./models/user')
require('dotenv')


passport.use(new GoogleStrategy(
    {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_SECRET,
        callbackURL: process.env.GOOGLE_CALLBACK
    },

    async function(accessToken, refreshToken, profile, cb) {
        try {
            console.log(profile.id)
            let user = await User.findOne({ googleId: profile.id})
            console.log(`google hit`)
            if (user) return cb(null, user)

            user = await User.create({
                username: profile.displayName,
                googleID: profile.id,
                email: profile.emails[0].value,
                picture: profile.photos[0].value
            })
            return cb(null, user)
        } catch (err) {
            console.log(`error in async function`)
            return cb(err)
        }
    }
))

passport.serializeUser(function(user, cb) {
    cb(null, user._id)
})

passport.deserializeUser(async function(userId, cb) {
    cb(null, await User.findById(userId))
})