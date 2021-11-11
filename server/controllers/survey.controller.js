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
    console.log(id);
    const queryRes = await db.Survey.getPost(id);
    console.log(queryRes);
    res.status(200);
    res.send(JSON.stringify(queryRes));
    res.end();
  } catch (error) {
    console.error(error);
    res.setStatus(500);
    res.end();
  }
}

module.exports = { getAllPosts, getPost };
