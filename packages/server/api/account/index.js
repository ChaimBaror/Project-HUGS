// const auth = require('./auth/index');
const express = require('express');
const validateUser = require('./validation');

const getDB = require('../../db');

/**
 *
 * @param {DB} db - a db object
 */
function init(db) {
    const route = express.Router();
    route.post('/', async (req, res) => {
        const { body } = req;

        try {
            const account = validateUser(body, false);
            const newAccount = await db.account.create(account);
            res.json(newAccount);
        } catch (e) {
            res.status(422).json({
                error: e.message,
            });
        }
    });

    return route;
}

const PATH = '/account';
module.exports = {
    PATH,
    init,
};
