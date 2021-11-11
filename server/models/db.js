const mockData = require('./mockdata');

const db = {};
db.Survey = {};
db.Survey.getAll = () => Promise.resolve(mockData);
db.Survey.getPost = (id) => Promise.resolve(mockData.filter((d) => d._id === parseInt(id)));

module.exports = db;
