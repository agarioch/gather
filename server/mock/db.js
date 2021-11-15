const { mockPosts, mockAnswers, mockUsers } = require('./mockdata');

let surveyId = 5;

const db = {};

// POSTS & SURVEYS
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
db.Survey.addResponse = (id, user_id) => {
  const numId = parseInt(id);
  const findId = (el) => el._id === parseInt(numId);
  const postIndex = mockPosts.findIndex(findId);
  if (Array.isArray(mockPosts[postIndex].respondees)) {
    mockPosts[postIndex].respondees.push(user_id);
  } else {
    mockPosts[postIndex].respondees = [user_id];
  }
  return db.Survey.getPost(id);
};
// SURVEY RESPONSES

db.Answer = {};
db.Answer.addAnswer = (answer) => {
  mockAnswers.push(answer);
  return Promise.resolve(answer);
};
db.Answer.getAll = () => Promise.resolve(mockAnswers);
db.Answer.getSurveyResponses = (surveyId) => {
  return Promise.resolve(mockAnswers.filter((answer) => answer.survey_id === surveyId));
};

// USERS (MOCK)
db.User = {};
db.User.getUser = (email) => {
  return Promise.resolve(mockUsers[email]);
};
db.User.getAll = () => Promise.resolve(mockUsers);

module.exports = db;
