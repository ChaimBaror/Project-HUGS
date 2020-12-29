const express = require('express');
const crypto = require('crypto');
const getDB = require('../../db');

const router = express.Router();
/**
 *  @typedef {object} Account
 *  @property {string} id
 *  @property {string} onboardingQuestioner
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
        id, email, registrationTime, onboardingQuestioner,
    } = body;

    if (typeof email !== 'string') {
        throw new Error('Invalid text');
    }
    return {
        id: id || crypto.randomBytes(8).toString('hex'),
        email,
        registrationTime,
        onboardingQuestioner,
    };
}
router.post('/', async (req, res) => {
    const { body } = req;
    const { userId } = req.cookies;
    try {
        const account = validateAccount(body, false);
        const db = await getDB();
        const newAccount = await db.account.create({ ...account, userId });
        res.json(newAccount);
    } catch (e) {
        res.status(422).json({
            error: ('incorrect data provider'),
        });
    }
});

/* GET accounts listing. */
router.get('/', (req, res) => {
    res.send('respond with a resource');
});
const ROUTE_PATH = '/account';
module.exports = {
    router,
    ROUTE_PATH,
};
