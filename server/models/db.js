const mockData = require('./mockdata');

const db = {};
db.Survey = {};
db.Survey.getAll = () => Promise.resolve(mockData);
db.Survey.getPost = (id) => Promise.resolve(mockData.filter((d) => d._id === parseInt(id)));
db.Survey.upvotePost = (id) => {
  const numId = parseInt(id);
  const findId = (el) => el._id === parseInt(numId);
  const postIndex = mockData.findIndex(findId);
  mockData[postIndex].votes++;
  return db.Survey.getPost(id);
};
db.Survey.addReply = (id, reply) => {
  const numId = parseInt(id);
  const findId = (el) => el._id === parseInt(numId);
  const postIndex = mockData.findIndex(findId);
  mockData[postIndex].replies.push(reply);
  return db.Survey.getPost(id);
};

module.exports = db;
