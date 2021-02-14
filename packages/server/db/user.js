const { Model, DataTypes } = require('sequelize');

class User extends Model {}

/**
 *
 * @param {Sequelize} sequelize - instance of sequelize
 * @param {Model} account - account model
 */
async function init(sequelize) {
    User.init(
        {
            id: {
                allowNull: false,
                primaryKey: true,
                type: DataTypes.STRING,
            },
            email: {
                allowNull: false,
                unique: true,
                type: DataTypes.STRING,
            },
            registrationTime: {
                allowNull: false,
                type: DataTypes.DATE,
            },
        },
        {
            sequelize,
            modelName: 'user',
            schema: 'first_application',
            freezeTableName: true,
            timestamps: false,
        },
    );

    await User.sync();

    return {
        create(user) {
            User.create(user);
        },
    };
}

module.exports = {
    init,
    User,
};
