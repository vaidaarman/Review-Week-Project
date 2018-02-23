'use strict'
const apiRouter = require('express').Router();
const { Patient } = require('../db/models');


module.exports = apiRouter;

//get all patients
apiRouter.get('/', function (req, res, next) {
  Patient.findAll()
  .then(patients => res.json(patients))
  .catch(next);
});

//get patient by id
apiRouter.get('/:id', (req, res, next) => {
  Patient.findById(req.params.id)
  .then(patient => {
    return !patient
    ? res.status(404).json('patient does not exist')
    : res.json(patient);
  })
  .catch(next);
});

//add new patient
apiRouter.post('/', (req, res, next) => {
  Patient.create(req.body)
  .then((newPatient) => res.json(newPatient))
  .catch(next);
});

//update patient's info
apiRouter.put('/:id', (req, res, next) => {
  Patient.findOne({
    where: {
      id: req.params.id
    }
  })
  .then(patient => patient.update(req.body))
  .then(() => res.status(204).end())
  .catch(next);
});

//delete a patient
apiRouter.delete('/:id', (req, res, next) => {
  Patient.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(() => res.status(204).end())
  .catch(next);
});
