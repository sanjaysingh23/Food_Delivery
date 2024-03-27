// config/database.js
const { Sequelize } = require('sequelize');

// Replace 'your_database_name', 'your_username', 'your_password' with your actual database name, username, and password
const sequelize = new Sequelize('food_delivery_app', 'postgres', '(sanju*,99', {
  host: 'localhost', // Change this if your database is hosted elsewhere
  port: '5432',
  dialect: 'postgres' // Specify the dialect (e.g., 'postgres' for PostgreSQL)
});

module.exports = sequelize;
