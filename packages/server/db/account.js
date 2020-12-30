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
        onboardingQuestioner: {
            type: DataTypes.JSONB,
            get(key) {
                const {
                    questionId, answerId, time, type,
                } = JSON.parse(this.getDataValue(key));
                return {
                    questionId, answerId, time, type,
                };
            },
        },
    },
    {
        sequelize,
        modelName: 'account',
        schema: 'first_application',
        freezeTableName: true,
        timestamps: false,
    });
    await Account.sync();
    return Account;
}
module.exports = {
    init,
    Account,
};
