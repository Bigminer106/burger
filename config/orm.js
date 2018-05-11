const connection = require('./connection');

var tableName = 'burgers';

var orm = {

  selectAll: callback => {
    var s = `SELECT * FROM ${tableName}`;

    connection.query(s, (err, res) => {
      callback(res);
    });
  },
  insertOne: (burger, callback) => {
    var s = `INSERT INTO ${tableName} (burger_name, devoured) VALUES (?, ?)`;
    burger.devoured = burger.devoured || 0;

    connection.query(s, [burger.burger_name, burger.devoured], (err, res) => {
      callback(res);
    });
  },
  updateOne: (burger, callback) => {
    var s = `UPDATE ${tableName} SET devoured=? WHERE id=?`;

    connection.query(s, [burger.devoured, burger.id], (err, res) => {
      callback(res);
    });
  }
  
};

module.exports = orm;