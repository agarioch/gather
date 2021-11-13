const { mockPosts, mockAnswers } = require('./mockdata');

let surveyId = 5;
let answerId = 0;

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
  newPost = { ...answer, _id: answerId };
  answerId++;
  mockAnswers.push(newPost);
  return Promise.resolve(newPost);
};

module.exports = db;
