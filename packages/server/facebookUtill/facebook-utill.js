const express = require('express');

const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;

const router = express.Router();
const facebookloginPath = process.env.FBLOGIN_PATH;
const facebookCallbakPath = process.env.FBCALLBACK_PATH;
passport.use(new FacebookStrategy({
    clientID: process.env.FBCLIENT_ID,
    clientSecret: process.env.FBSECRET,
    callbackURL: 'http://localhost:8080/auth/facebook/callback',
},
(accessToken, refreshToken, profile, cb) => cb(null, profile)));

function facebookLoginRouter() {
    return router.get(facebookloginPath,
        passport.authenticate('facebook', {
            failureRedirect: '/failed',
        }));
}
function facebookCallbackRouter() {
    return router.get(facebookCallbakPath,
        passport.authenticate('facebook', {
            failureRedirect: '/failed',
            successRedirect: '/onboarding',
        }));
}
module.exports = {
    facebookLoginRouter,
    facebookCallbackRouter,
};
