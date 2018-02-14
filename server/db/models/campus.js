const Sequelize = require('sequelize');
const db = require('../index');

const image = 'https://upload.wikimedia.org/wikipedia/commons/3/33/Interplanetary_Superhighway.jpg'

module.exports = db.define('campus', {
  name: {
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
