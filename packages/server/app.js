const cookieSession = require('cookie-session');

const cors = require('cors');
const passport = require('passport');

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const fs = require('fs');
const ini = require('ini');

const accountRouter = require('./api/account/index');
const usersRouter = require('./api/user/index');

const secret = ini.parse(fs.readFileSync('secrets.ini', 'utf-8'));

Object.keys(secret).forEach((k) => {
    process.env[k] = secret[k];
    console.log(process.env[k]);
});

require('./googleUtil/google-util');

const api = require('./api/index');

const app = express();
app.use(cors());
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Configure Session Storage
app.use(
    cookieSession({
        name: 'session-name',
        keys: ['key1', 'key2'],
    }),
);

// Configure Passport
app.use(passport.initialize());
app.use(passport.session());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', api.google_login);
app.use('/', api.google_callback);

app.use('/', api.facebook_login);
app.use('/', api.facebook_callback);

app.use(api.account_path, api.account);
app.use(api.user_path, api.user);

app.use('/account', accountRouter.route);
app.use('/users', usersRouter.route);

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept',
    );
    next();
});

app.get('/failed', (req, res) => {
    res.send('<h1>Log in Failed :(</h1>');
});

app.get('/profile', (req, res) => {
    res.send(`<h1>${req.user.displayName}'s Profile Page</h1>`);
});

app.get('/onboarding', (req, res) => {
    res.send(` <h1>Hello ${req.user.displayName}</h1>`);
});

module.exports = app;
