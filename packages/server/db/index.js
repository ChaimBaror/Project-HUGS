const { init: initAccount, Account } = require('./account');
const { init: initUser, User } = require('./user');
const { init: initUserAccount } = require('./userAccount');

const connect = require('./connection');

const db = {
    initialiaized: false,
};

async function init() {
    if (!db.initialiaized) {
        const connection = connect.getConnection();
        db.user = await initUser(connection);
        db.account = await initAccount(connection);
        db.userAccount = await initUserAccount(connection, User, Account);
        db.initialiaized = true;
    }
    return db;
}

module.exports = init;
