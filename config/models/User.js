const {Model, DataTypes} = require('sequelize');
const sequelize = require('../db').connect();

class User extends Model {}
User.init({
  username: DataTypes.STRING,
  birthday: DataTypes.DATE
}, { 
    timestamps: true,
    underscored: true,
    paranoid: true,
    sequelize, 
    modelName: 'user' 
});

(async () => {
  await sequelize.sync();
  const jane = await User.create({
    username: 'janedoe',
    birthday: new Date(1980, 6, 20)
  });
  console.log(jane.toJSON());
})();

module.exports = User;