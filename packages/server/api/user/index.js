// const auth = require('./auth/index');
const express = require('express');
const validateUser = require('./validation');

const getDB = require('../../db');

const route = express.Router();

route.post('/', async (req, res) => {
    const { body } = req;

    try {
        const user = validateUser(body, false);
        const db = await getDB();
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

module.exports = {
    route,
};
