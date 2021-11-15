const mongoose = require('mongoose');

const AnswerSchema = new mongoose.Schema({
  question_id: { type: String },
  answer: { type: String },
});
const ResponseSchema = new mongoose.Schema({
  user_id: { type: String, required: true },
  survey_id: { type: String, required: true },
  author_name: { type: String, required: true },
  answers: [AnswerSchema],
});

module.exports = mongoose.model('Response', ResponseSchema);
