const db = require('../models/db');

async function getAllPosts(req, res) {
  try {
    const queryRes = await db.Survey.getAll();
    res.status(200);
    res.send(JSON.stringify(queryRes));
    res.end();
  } catch (error) {
    console.error(error);
    res.setStatus(500);
    res.end();
  }
}

async function getPost(req, res) {
  try {
    const { id } = req.params;
    const queryRes = await db.Survey.getPost(id);
    res.status(200);
    res.send(JSON.stringify(queryRes));
    res.end();
  } catch (error) {
    console.error(error);
    res.setStatus(500);
    res.end();
  }
}
async function upvotePost(req, res) {
  try {
    console.log('upvoting post');
    const { id } = req.params;
    const queryRes = await db.Survey.upvotePost(id);
    res.status(201);
    res.send(JSON.stringify(queryRes));
    res.end();
  } catch (error) {
    console.error(error);
    res.setStatus(500);
    res.end();
  }
}
async function addReply(req, res) {
  try {
    console.log('upvoting post');
    const { id } = req.params;
    console.log(req.body);
    const reply = req.body;
    const queryRes = await db.Survey.addReply(id, reply);
    res.status(201);
    res.send(JSON.stringify(queryRes));
    res.end();
  } catch (error) {
    console.error(error);
    res.setStatus(500);
    res.end();
  }
}

module.exports = { getAllPosts, getPost, upvotePost, addReply };
