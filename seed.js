const db = require('./server/db');
const Campus = require('./server/db/models/campus');
const Student = require('./server/db/models/student');


const campuses = [{
  name: 'Terra',
  description: 'The best JavaScript program on earth, strongest network and top outcomes in the tech capital of the world.'
}, {
  name: 'Luna',
  description: 'We are a leading JavaScript school the area.'
}, {
  name: 'Venus',
  description: 'Become a JavaScript expert in our newest campus.'
}, {
  name: 'Sol',
  description: 'Learn JavaScript in the largest campus of our academy.'
}];

const students = [
  {
    campusId: 1,
    firstName: 'Sirius',
    lastName: 'Canis Major',
    email: 'SiriusCM@java.com',
    gpa: 3.9
  },
  {
    campusId: 2,
    firstName: 'Vega',
    lastName: 'Lyra',
    email: 'VegaL@java.com',
    gpa: 4
  },
  {
    campusId: 1,
    firstName: 'Deneb',
    lastName: 'Cygnus',
    email: 'DenebC@java.com',
    gpa: 3.5
  },
  {
    campusId: 4,
    firstName: 'Canopus',
    lastName: 'Carina',
    email: 'CanopusC@java.com',
    gpa: 3.8
  },
  {
    campusId: 4,
    firstName: 'Polaris',
    lastName: 'Ursa Minor',
    email: 'PolarisUM@java.com',
    gpa: 3.7
  },
  {
    campusId: 1,
    firstName: 'Antares',
    lastName: 'Scorpius',
    email: 'AntaresS@java.com',
    gpa: 4
  },
  {
    campusId: 2,
    firstName: 'Bellatrix',
    lastName: 'Orion',
    email: 'BellatrixO@java.com',
    gpa: 3.9
  },
  {
    campusId: 2,
    firstName: 'Mintaka',
    lastName: 'Orion',
    email: 'MintakaO@java.com',
    gpa: 3.8
  },
  {
    campusId: 1,
    firstName: 'Aldebaran',
    lastName: 'Taurus',
    email: 'AldebaranT@java.com',
    gpa: 3.9
  },
  {
    campusId: 1,
    firstName: 'Altair',
    lastName: 'Aquila',
    email: 'AltairA@java.com',
    gpa: 4
  },

];

const seed = () =>
  Promise.all(campuses.map(campus =>
    Campus.create(campus))
  )
    .then(() =>
      Promise.all(students.map(student =>
        Student.create(student))
      )
    );

const runSeed = () => {
  console.log('Syncing db...');
  db.sync({ force: true })
    .then(() => {
      console.log('Seeding databse...');
      return seed();
    })
    .catch(err => {
      console.log('Error while seeding');
      console.log(err.stack);
    })
    .then(() => {
      db.close();
      return null;
    });
};

runSeed();
