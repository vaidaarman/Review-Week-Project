'use strict'
const apiRouter = require('express').Router()
//const db = require('../db')

apiRouter.use('/campuses', require('./campuses'));
apiRouter.use('/students', require('./students'));

apiRouter.use((req, res, next) => {
  res.status(404).send('Not found');
});

module.exports = apiRouter;