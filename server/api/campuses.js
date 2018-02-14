'use strict'
const apiRouter = require('express').Router();
const { Campus } = require('../db/models');


module.exports = apiRouter;

//get all campuses
apiRouter.get('/', (req, res, next) => {
  Campus.findAll()
  .then(campuses => res.json(campuses))
  .catch(next);
});

//find campus by id
apiRouter.get('/:id', (req, res, next) => {
  Campus.findById(req.params.id)
  .then(campus => {
    return !campus
    ? res.status(404).json("campus does not exist")
    : res.json(campus);
  })
  .catch(next);
});

//add new campus
apiRouter.post('/', (req, res, next) => {
  Campus.create(req.body)
  .then((newCampus) => res.json(newCampus))
  .catch(next);
});

//update campus info for one campus
apiRouter.put('/:id', (req, res, next) => {
  Campus.findOne({
    where: {
      id: req.params.id
    }
  })
  .then(campus => campus.update(req.body))
  .then(() => res.status(204).end())
  .catch(next);
});

//delete a campus
apiRouter.delete('/:id', (req, res, next) => {
  Campus.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(() => res.status(204).end())
  .catch(next);
});