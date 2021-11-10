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

module.exports = { getAllPosts };
