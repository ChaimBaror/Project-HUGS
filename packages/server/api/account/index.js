const express = require('express');
const crypto = require('crypto');

const router = express.Router();
/**
 *  @typedef {object} Account
 *  @property {string} id
 *  @property {string} questioner
 *
 */
/**
 * POST Account
 */
/**
 * @param {Account} body
 * @param {boolean} enforce
 * @returns {Account}
 */
function validateAccount(body) {
    if (!body) {
        throw new Error('Invalid body');
    }
    const {
        id, email, registrationTime, questioner,
    } = body;

    if (typeof email !== 'string') {
        throw new Error('Invalid text');
    }
    return {
        id: id || crypto.randomBytes(8).toString('hex'),
        email,
        registrationTime,
        questioner,
    };
}

function createRoute(db) {
    return router.post('/', async (req, res) => {
        const { body } = req;
        const { userId } = req.cookies;
        try {
            const account = validateAccount(body, false);
            const newAccount = await db.account.create({ ...account, userId });
            res.json(newAccount.toJSON());
        } catch (e) {
            res.status(422).json({
                error: 'incorrect data provider',
            });
        }
    });
}
const ROUTE_PATH = '/account';
module.exports = {
    createRoute,
    ROUTE_PATH,
};
