
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database'); 
const Organization = sequelize.define('Organization', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
},{
  tableName: 'Organization'
});
module.exports = Organization;
