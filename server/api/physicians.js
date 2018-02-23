'use strict'
const apiRouter = require('express').Router();
const { Physician } = require('../db/models');


module.exports = apiRouter;

//get all physicians
apiRouter.get('/', (req, res, next) => {
  Physician.findAll()
  .then(physicians => res.json(physicians))
  .catch(next);
});

//find a physician by id
apiRouter.get('/:id', (req, res, next) => {
  Physician.findById(req.params.id)
  .then(physician => {
    return !physician
    ? res.status(404).json("this physician does not exist")
    : res.json(physician);
  })
  .catch(next);
});

//add a new physician
apiRouter.post('/', (req, res, next) => {
  Physician.create(req.body)
  .then((newPhysician) => res.json(newPhysician))
  .catch(next);
});

//update physician's info
apiRouter.put('/:id', (req, res, next) => {
  Physician.findOne({
    where: {
      id: req.params.id
    }
  })
  .then(physician => physician.update(req.body))
  .then(() => res.status(204).end())
  .catch(next);
});

//delete a physician
apiRouter.delete('/:id', (req, res, next) => {
  Physician.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(() => res.status(204).end())
  .catch(next);
});
