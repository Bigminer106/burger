const Sequelize = require('sequelize');

const sequelize = require('../config/connection.js');

var Burger = sequelize.define('burger', {
  burger_name: {
    type: Sequelize.STRING
  },
  devoured: {
    type: Sequelize.BOOLEAN
  }
}, {
  timestamps: false
});

Burger.sync();

module.exports = Burger;