const {DataTypes, Model} = require('sequelize');
const sequelize = require('../client');

class Groupe extends Model{}

Groupe.init({
  name: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
}
}, {
  sequelize,
  tableName: "groupe"
});

module.exports = Groupe;