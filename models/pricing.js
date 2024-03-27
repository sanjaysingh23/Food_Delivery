
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database'); 
const Organization = require('./organization');
const Item = require('./item');

const Pricing = sequelize.define('Pricing', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  zone: {
    type: DataTypes.STRING,
    allowNull: false
  },
  base_distance_in_km: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  km_price: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  fix_price: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  organization_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Organization',
      key: 'id'
    }
  },
  item_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Item', 
      key: 'id'
    }
  }
},{
  tableName: 'Pricing',
  timestamps: false 
});

Pricing.belongsTo(Organization, { foreignKey: 'organization_id' });
Pricing.belongsTo(Item, { foreignKey: 'item_id' });
module.exports = Pricing;
