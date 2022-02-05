const {DataTypes, Model} = require('sequelize');
const sequelize = require('../client');

class Member extends Model{}

Member.init({
  name : {
    type: DataTypes.TEXT,
    allowNull: false
  },
  instrument: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  description:{
    type: DataTypes.TEXT,
    allowNull: false
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false
  },
  groupe_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  sequelize,
  tableName: "member"
});

module.exports = Member;