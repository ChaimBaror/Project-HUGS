// const jwt = require('json-web-token');

// const users = {
//     john: { password: 'passwordjohn' },
//     mary: { password: 'passwordmary' },
// };

// // eslint-disable-next-line consistent-return
// const login = function (req, res) {
//     const { username } = req.body;
//     const { password } = req.body;

//     // Neither do this!
//     if (!username || !password || users[username].password !== password) {
//         return res.status(401).send();
//     }

//     // use the payload to store information about the user such as username, user role, etc.
//     const payload = { username };

//     // create the access token with the shorter lifespan
//     const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
//         algorithm: 'HS256',
//         expiresIn: process.env.ACCESS_TOKEN_LIFE,
//     });

//     // create the refresh token with the longer lifespan
//     const refreshToken = jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {
//         algorithm: 'HS256',
//         expiresIn: process.env.REFRESH_TOKEN_LIFE,
//     });

//     // store the refresh token in the user array
//     users[username].refreshToken = refreshToken;

//     // send the access token to the client inside a cookie
//     res.cookie('jwt', accessToken, { secure: true, httpOnly: true });
//     res.send();
// };

// // eslint-disable-next-line consistent-return
// const verify = function (req, res, next) {
//     const accessToken = req.cookies.jwt;

//     // if there is no token stored in cookies, the request is unauthorized
//     if (!accessToken) {
//         return res.status(403).send();
//     }

//     let payload;
//     try {
//         // use the jwt.verify method to verify the access token
//         // throws an error if the token has expired or has a invalid signature
//         payload = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
//         next();
//     } catch (e) {
//         // if an error occured return request unauthorized error
//         return res.status(401).send();
//     }
// };

// const refresh = function (req, res) {
//     const accessToken = req.cookies.jwt;

//     if (!accessToken) {
//         return res.status(403).send();
//     }

//     let payload;
//     try {
//         payload = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
//     } catch (e) {
//         return res.status(401).send();
//     }

//     // retrieve the refresh token from the users array
//     const { refreshToken } = users[payload.username];

//     // verify the refresh token
//     try {
//         jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
//     } catch (e) {
//         return res.status(401).send();
//     }

//     const newToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET,
//         {
//             algorithm: 'HS256',
//             expiresIn: process.env.ACCESS_TOKEN_LIFE,
//         });

//     res.cookie('jwt', newToken, { secure: true, httpOnly: true });
//     res.send();
// };
// module.exports = {
//     login,
//     verify,
//     refresh,
// };
