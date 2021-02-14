const express = require('express');
const validateUser = require('./validation');

function createRoute(db) {
    const router = express.Router();

    router.post('/', async (req, res) => {
        const { body } = req;

        try {
            // currently each user has only one account.
            const user = validateUser(body, false);
            const exisistingUser = db.user.find(user.id);
            if (exisistingUser) {
                // return error - cannot create user
            }
            // case where user does not exist - create user
            const newUser = await db.user.create(user);
            const newAcc = await db.account.create(user);
            newUser.addAccount(newAcc);
            res.json(newUser);
        } catch (e) {
            res.status(422).json({
                error: e.message,
            });
        }
    });

    return router;
}
const ROUTE_PATH = '/user';
module.exports = {
    createRoute,
    ROUTE_PATH,
};
