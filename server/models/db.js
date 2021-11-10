const mockData = require('./mockdata');

const db = {};
db.Survey = {};
db.Survey.getAll = () => Promise.resolve(mockData);

module.exports = db;
