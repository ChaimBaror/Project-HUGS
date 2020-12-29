const { init: initAccount } = require('./account');

const connect = require('./connection');

const db = {
    initialiaized: false,
};

async function init() {
    if (!db.initialiaized) {
        const connection = connect.getConnection();
        db.account = await initAccount(connection);

        db.initialiaized = true;
    }
    return db;
}
module.exports = init;
