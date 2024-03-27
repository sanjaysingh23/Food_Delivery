
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database'); 

const Item = sequelize.define('Item', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  }
},{
  tableName: 'Item'
});
module.exports = Item;
