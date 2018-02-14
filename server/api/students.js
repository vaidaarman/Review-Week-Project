'use strict'
const apiRouter = require('express').Router();
const { Student } = require('../db/models');


module.exports = apiRouter;

//GET api/students
apiRouter.get('/', function (req, res, next) {
  Student.findAll()
  .then(students => res.json(students))
  .catch(next);
});
