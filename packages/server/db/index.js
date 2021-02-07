const { init: initUser}  = require("./tables");
// const { init: initAccount,Account}  = require("./account");

const connect = require("./connection");

const db = {
  initialized: false,
};

async function init() {
  if(!db.initialized) {
    const connection = connect.getConnection();
    const {acc,use,User_Account} = await initUser(connection);
     db.user = use;
     db.account = acc;
     db.User_Account = User_Account;
    // db.account = await initAccount(connection,User);
    
    db.initialized = true;
  }
  return db
}

module.exports = init;