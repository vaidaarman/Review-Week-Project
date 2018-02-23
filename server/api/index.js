'use strict'
const apiRouter = require('express').Router()
//const db = require('../db')

apiRouter.use('/physicians', require('./physicians'));
apiRouter.use('/patients', require('./patients'));

apiRouter.use((req, res, next) => {
  res.status(404).send('Not found');
});

module.exports = apiRouter;
