const { mockPosts, mockAnswers } = require('./mockdata');

let surveyId = 5;

const db = {};
db.Survey = {};
db.Survey.getAll = () => Promise.resolve(mockPosts);
db.Survey.getPost = (id) => Promise.resolve(mockPosts.filter((d) => d._id === parseInt(id)));
db.Survey.upvotePost = (id) => {
  const numId = parseInt(id);
  const findId = (el) => el._id === parseInt(numId);
  const postIndex = mockPosts.findIndex(findId);
  mockPosts[postIndex].votes++;
  return db.Survey.getPost(id);
};
db.Survey.addReply = (id, reply) => {
  const numId = parseInt(id);
  const findId = (el) => el._id === parseInt(numId);
  const postIndex = mockPosts.findIndex(findId);
  mockPosts[postIndex].replies.push(reply);
  return db.Survey.getPost(id);
};
db.Survey.addPost = (post) => {
  newPost = { ...post, _id: surveyId };
  surveyId++;
  mockPosts.push(newPost);
  return Promise.resolve(newPost);
};

db.Answer = {};
db.Answer.addAnswer = (answer) => {
  mockAnswers.push(answer);
  console.log(answer);
  return Promise.resolve(answer);
};
db.Answer.getAll = () => Promise.resolve(mockAnswers);
db.Answer.getSurveyResponses = (surveyId) => {
  return Promise.resolve(mockAnswers.filter((answer) => answer.question_id === surveyId));
};

module.exports = db;
