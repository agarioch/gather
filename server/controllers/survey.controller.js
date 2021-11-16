const mockDb = require('../mock/db');
const Post = require('../models/posts.models');
const Response = require('../models/response.models');

//! POST CONTROLLERS
async function getAllPosts(req, res) {
  try {
    const queryRes = await Post.find();
    res.status(200);
    res.send(JSON.stringify(queryRes));
    res.end();
  } catch (error) {
    console.error(error);
    res.status(500);
    res.end();
  }
}

async function getPost(req, res) {
  try {
    const { id } = req.params;
    const queryRes = await Post.findById(id);
    res.status(200);
    res.send(JSON.stringify(queryRes));
    res.end();
  } catch (error) {
    console.error(error);
    res.status(500);
    res.end();
  }
}
async function upvotePost(req, res) {
  try {
    const { id } = req.params;
    const queryRes = await Post.findByIdAndUpdate(id, { $inc: { votes: 1 } });
    res.status(202);
    res.send(JSON.stringify(queryRes));
    res.end();
  } catch (error) {
    console.error(error);
    res.status(500);
    res.end();
  }
}
async function addReply(req, res) {
  try {
    const { id } = req.params;
    const reply = req.body;
    const queryRes = await Post.findByIdAndUpdate(id, { $push: { replies: reply } });
    res.status(201);
    res.send(JSON.stringify(queryRes));
    res.end();
  } catch (error) {
    console.error(error);
    res.status(500);
    res.end();
  }
}
async function addStatus(req, res) {
  try {
    const { id } = req.params;
    const status = req.body;
    const queryRes = await Post.findByIdAndUpdate(id, { status: status });
    res.status(201);
    res.send(JSON.stringify(queryRes));
    res.end();
  } catch (error) {
    console.error(error);
    res.status(500);
    res.end();
  }
}
async function addPost(req, res) {
  try {
    const post = req.body;
    const queryRes = await Post.create(post);
    res.status(201);
    res.send(JSON.stringify(queryRes));
    res.end();
  } catch (error) {
    console.error(error);
    res.status(500);
    res.end();
  }
}
async function addResponse(req, res, next) {
  try {
    const { id } = req.params;
    const { user_id } = req.body;
    await Post.findByIdAndUpdate(id, { $addToSet: { respondees: user_id } });
    next();
  } catch (error) {
    console.error(error);
    res.status(500);
    res.end();
  }
}
//! RESPONSE CONTROLLERS
async function addAnswer(req, res) {
  try {
    const answer = req.body;
    const queryRes = await Response.create(answer);
    res.status(201);
    res.send(JSON.stringify(queryRes));
    res.end();
  } catch (error) {
    console.error(error);
    res.status(500);
    res.end();
  }
}
async function getAllAnswers(req, res) {
  try {
    const queryRes = await Response.find();
    res.status(200);
    res.send(JSON.stringify(queryRes));
    res.end();
  } catch (error) {
    console.error(error);
    res.status(500);
    res.end();
  }
}
async function getSurveyAnswers(req, res) {
  try {
    const { id } = req.params;
    const queryRes = await Response.find({ survey_id: id });
    res.status(200);
    res.send(JSON.stringify(queryRes));
    res.end();
  } catch (error) {
    console.error(error);
    res.status(500);
    res.end();
  }
}
//! USER CONTROLLERS
async function getAllUsers(req, res) {
  try {
    const queryRes = await mockDb.User.getAll();
    res.status(200);
    res.send(JSON.stringify(queryRes));
    res.end();
  } catch (error) {
    console.error(error);
    res.status(500);
    res.end();
  }
}
async function getUser(req, res) {
  try {
    const { email } = req.body;
    const queryRes = await mockDb.User.getUser(email);
    res.status(200);
    res.send(JSON.stringify(queryRes));
    res.end();
  } catch (error) {
    console.error(error);
    res.status(500);
    res.end();
  }
}

module.exports = {
  getAllPosts,
  getPost,
  upvotePost,
  addReply,
  addStatus,
  addPost,
  addResponse,
  addAnswer,
  getAllAnswers,
  getSurveyAnswers,
  getAllUsers,
  getUser,
};
