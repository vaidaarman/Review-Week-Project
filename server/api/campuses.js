'use strict'
const apiRouter = require('express').Router();
const { Campus } = require('../db/models');


module.exports = apiRouter;

//GET api/campuses
apiRouter.get('/', function (req, res, next) {
  Campus.findAll()
  .then(campuses => res.json(campuses))
  .catch(next);
});
