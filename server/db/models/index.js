'use strict';

const db = require('../index');
const Physician = require('./physician');
const Patient = require('./patient');

Patient.belongsTo(Physician);
Physician.hasMany(Patient);

module.exports = {
	db,
	Physician,
	Patient
};
