const account = require('./account');
const user = require('./user');
const db = require('../db');
const mockDB = require('../db/mock/mockDB');

const testDB = process.env.MOCK_DB === 'true' ? mockDB : db;

module.exports = {
    account: account.createRoute(testDB),
    account_path: '/account',
    user: user.createRoute(testDB),
    user_path: '/user',
};
