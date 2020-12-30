const express = require('express');
const validateUser = require('./validation');

const getDB = require('../../db');

const router = express.Router();

router.post('/', async (req, res) => {
    const { body } = req;

    try {
        const user = validateUser(body, false);
        const db = await getDB();
        const newUser = await db.user.create(user);
        const newAcc = await db.account.create({ id: 'nkjsgkdsng454', email: 'yakov.m1994@gmail.com', registrationTime: 'Sun Dec 27 2020 17:48:19 GMT+0200' });
        newUser.addAccount(newAcc);
        res.json(newUser);
    } catch (e) {
        res.status(422).json({
            error: e.message,
        });
    }
});

module.exports = {
    router,
};
