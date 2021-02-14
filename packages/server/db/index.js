const { init: initAccount } = require('./account');
const { init: initUser } = require('./user');
const { init: initUserAccount } = require('./userAccount');

const connect = require('./connection');

const db = {
    initialiaized: false,
};

async function init() {
    if (!db.initialiaized) {
        const connection = connect.getConnection();
        const user = await initUser(connection);
        const account = await initAccount(connection);
        const userAccount = await initUserAccount(connection, user, account);
        db.user = user;
        db.ccount = account;
        db.userAccount = userAccount;
        db.initialiaized = true;
    }
    return db;
}

module.exports = init;
