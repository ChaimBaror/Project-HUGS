// const passport = require('passport');
// const passportJWT = require('passport-jwt');

// const users = [{
//     id: 1,
//     name: 'John',
//     email: 'john@mail.com',
//     password: 'john123',
// }, {
//     id: 2,
//     name: 'Sarah',
//     email: 'sarah@mail.com',
//     password: 'sarah123',
// }];

// const { ExtractJwt } = passportJWT;
// const { Strategy } = passportJWT;
// const params = {
//     secretOrKey: process.env.JWT_SECRET,
//     jwtFromRequest: ExtractJwt.fromAuthHeader(),
// };

// module.exports = () => {
//     const strategy = new Strategy(params, ((payload, done) => {
//         const user = users[payload.id] || null;
//         if (user) {
//             return done(null, {
//                 id: user.id,
//             });
//         }
//         return done(new Error('User not found'), null);
//     }));
//     passport.use(strategy);
//     return {
//         initialize() {
//             return passport.initialize();
//         },
//         authenticate() {
//             return passport.authenticate('jwt', { session: false });
//         },
//     };
// };
