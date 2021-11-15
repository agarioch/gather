const mongoose = require('mongoose');

mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', function () {
  console.error('⛔️ Database connection error');
});
db.once('open', function () {
  console.log('🚀 Database running');
});

module.exports = db;
