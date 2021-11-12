const { Router } = require('express');
const { getAllPosts, getPost, upvotePost } = require('./controllers/survey.controller');
// TODO: Implement ability to authenticate client
// const checkJwt = require('./middleware/auth.middleware');

const router = Router();

// all the following routes require authentication
// router.use(checkJwt);

router.get('/', (req, res) => res.end('send requests to posts'));
router.get('/posts', getAllPosts);
// router.post('/survey', postSurvey);
router.get('/posts/:id', getPost);
router.post('/posts/:id/upvote', upvotePost);

module.exports = router;
