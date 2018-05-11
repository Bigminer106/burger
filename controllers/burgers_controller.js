const express = require('express');
const burger = require('../models/burger');

module.exports = app => {
  app.get('/api/all'), (req, res) => {
    Burger.selectAll({}).then(results => {
      res.json(results);
    });
  };

  app.post('/api/new', (req, res) => {
    console.log('Burger Data:');
    console.log(req.body);

    Burger.create({
      burger_name: req.body.burger_name,
      devoured: req.body.devoured
    }).then(results => {
      res.status(201).end();
    });
  });

  app.put('/api/:id', (req, res) => {
    Burger.update({
      devoured: req.body.devoured,
      id: req.body.id
    }).then(results => {
      res.status(200).end();
    });
  });
};