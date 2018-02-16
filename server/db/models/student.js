const Sequelize = require('sequelize');
const db = require('../index');

module.exports = db.define('student', {
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
  gpa: {
    type: Sequelize.FLOAT(2, 1),
    allowNull: false,
    validate: { min: 0.1, max: 4.0 }
  },
  name: {
    type: Sequelize.VIRTUAL,
    get() {
      return this.firstName.concat(' ' + this.lastName)
    }
  },
  campusId: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});
