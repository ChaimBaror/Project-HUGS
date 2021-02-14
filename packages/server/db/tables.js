const { DataTypes } = require('sequelize');

class Tables {}

/**
 * 
 * @param {Sequelize} sequelize - instance of sequelize
 */
async function init(sequelize) {
 let use= sequelize.define('user',{
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
    registrationTime :{
      allowNull: false,
      type: DataTypes.DATE
    }
  }, { 
    sequelize, 
    modelName: "user",
    schema: "first_application",
    freezeTableName: true,
    timestamps: false
  });

  let acc=sequelize.define("account",{
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
    registrationTime :{
      allowNull: false,
      type: DataTypes.DATE
    }
  }, { 
    sequelize, 
    modelName: "account",
    schema: "first_application",
    freezeTableName: true,
    timestamps: false
  });
  // use.belongsToMany(acc, { through: 'User_Profiles' });
  // acc.belongsToMany(use, { through: 'User_Profiles' });

  const User_Account = sequelize.define('User_Account', {}, { timestamps: false });
use.belongsToMany(acc, { through: User_Account });
acc.belongsToMany(use, { through: User_Account });
  await use.sync()
  await acc.sync()
  await User_Account.sync()
  return {use,acc, User_Account};
}

module.exports = {
  init
};
