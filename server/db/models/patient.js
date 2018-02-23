const Sequelize = require('sequelize');
const db = require('../index');

module.exports = db.define('patient', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    isEmail: true,
    isUnique: true,
    allowNull: false,
  },
  dob: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  pastHistory: {
    type: Sequelize.STRING,
  },
  name: {
    type: Sequelize.VIRTUAL,
    get() {
      return this.firstName.concat(' ' + this.lastName)
    }
  },
  physicianId: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});
