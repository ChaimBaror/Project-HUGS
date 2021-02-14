const { Model, DataTypes } = require('sequelize');

class Account extends Model {}

/**
 *
 * @param {Sequelize} sequelize  - instance of sequelize
 */
async function init(sequelize) {
    Account.init({
        id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
            validate: {
                isEmail: true,
            },
        },
        registrationTime: {
            type: DataTypes.DATE,
        },
        questioner: {
            type: DataTypes.JSONB,
        },
    },
    {
        sequelize,
        modelName: 'account',
        schema: process.env.PGSCHEMA,
        freezeTableName: true,
        timestamps: false,
    });
    await Account.sync();
    return {
        /**
         * @param {Object} data
         * @param {string} data.firstName
         * @param {string} data.lastName
         * @param {Date} data.date
         */
        async createAccount(data) {
            Account.create(data);
        },

    };
}

module.exports = {
    init,
    Account,
};
