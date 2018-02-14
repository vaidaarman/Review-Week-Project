'use strict'
const apiRouter = require('express').Router();
const { Student } = require('../db/models');


module.exports = apiRouter;

//get all students
apiRouter.get('/', function (req, res, next) {
  Student.findAll()
  .then(students => res.json(students))
  .catch(next);
});

//get student by id
apiRouter.get('/:id', (req, res, next) => {
  Student.findById(req.params.id)
  .then(student => {
    return !student
    ? res.status(404).json('student does not exist')
    : res.json(student);
  })
  .catch(next);
});

//add new student
apiRouter.post('/', (req, res, next) => {
  Student.create(req.body)
  .then((newStudent) => res.json(newStudent))
  .catch(next);
});

//update student info for one student
apiRouter.put('/:id', (req, res, next) => {
  Student.findOne({
    where: {
      id: req.params.id
    }
  })
  .then(student => student.update(req.body))
  .then(() => res.status(204).end())
  .catch(next);
});

//delete a student
apiRouter.delete('/:id', (req, res, next) => {
  Student.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(() => res.status(204).end())
  .catch(next);
});