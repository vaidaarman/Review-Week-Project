const Sequelize = require('sequelize');
const db = require('../index');

const image = 'http://www.freeclipart.pw/uploads/doctor-clip-art--images--free-for-commercial-use--page-2-3.png'

module.exports = db.define('physician', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  specialty: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT
  },
  imageURL: {
    type: Sequelize.STRING,
    defaultValue: image
  }
});
