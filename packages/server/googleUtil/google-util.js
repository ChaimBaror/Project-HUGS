/* eslint-disable camelcase */
const express = require('express');

const router = express.Router();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

// const db = require('../db/mock/mockDB');

const googleLoginPath = process.env.GLOGIN_PATH;
const googleCallbackPath = process.env.GCALLBACK_PATH;

passport.serializeUser((user, done) => {
    /*
    From the user take just the id (to minimize the cookie size)
    and just pass the id of the user
    to the done callback
    PS: You dont have to do it like this its just usually done like this
    */
    done(null, user);
});
passport.deserializeUser((user, done) => {
    /*
    Instead of user this function usually recives the id
    then you use the id to select the user from the db
    and pass the user obj to the done callback
    PS: You can later access this data in any routes in: req.user
    */
    done(null, user);
});
passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GCLEINT_ID,
            clientSecret: process.env.GSECRET,
            callbackURL: process.env.GCALLBACK_PATH,
        },
        (accessToken, refreshToken, profile, cb) => cb(null, profile),
    // (accessToken, refreshToken, profile, done) => {
    //     const user = profile;
    //     db.user.create({ ...user, user });
    //     console.log(user);
    //     done(null, user);
    // }
    // eslint-disable-next-line function-paren-newline
    ),
);

/**
 * Forward user req to google
 * Google ask user if they grand permission / user granding pemission
 * User on hold ,take 'code' from url
 */
function googleLoginRouter() {
    return router.get(
        googleLoginPath,
        passport.authenticate('google', { scope: ['profile', 'email'] }),
    );
}
/**
 * Exchanging the 'code' with google / google see the 'code' in the url and replies detailes
 */
function googleCallbackRouter() {
    return router.get(
        googleCallbackPath,
        // (req, res, next) => {
        //     next();
        // },
        passport.authenticate('google', {
            failureRedirect: '/failed',
            successRedirect: '/onboarding',
        }),
    );
}

module.exports = {
    googleLoginRouter,
    googleCallbackRouter,
};
