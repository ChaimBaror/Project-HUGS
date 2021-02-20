const { Model } = require('sequelize');

class UserAccount extends Model {}

async function init(sequelize, user, account) {
    UserAccount.init(
        {},
        {
            sequelize,
            modelName: 'userAccount',
            schema: process.env.PGSCHEMA,
            freezeTableName: true,
            timestamps: false,
        },
    );

    user.belongsToMany(account, { through: UserAccount });
    account.belongsToMany(user, { through: UserAccount });
    await UserAccount.sync();

    return {};
}

module.exports = {
    init,
    UserAccount,
};
