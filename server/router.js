const { Router } = require('express');
const {
  getAllPosts,
  getPost,
  upvotePost,
  addReply,
  addPost,
  addAnswer,
  getSurveyAnswers,
  getAllAnswers,
  getAllUsers,
  getUser,
  addResponse,
  addStatus,
  deletePost,
  patchUserVotes,
} = require('./controllers/survey.controller');

const router = Router();

// TODO: Implement ability to authenticate client
// const checkJwt = require('./middleware/auth.middleware');
// all the following routes require authentication
// router.use(checkJwt);

router.get('/', (req, res) => res.end('send requests to posts'));
router.get('/posts', getAllPosts);
router.post('/posts', addPost);
router.get('/posts/:id', getPost);
router.post('/posts/:id/upvote', patchUserVotes, upvotePost);
router.post('/posts/:id/reply', addReply);
router.post('/posts/:id/status', addStatus);
router.post('/posts/:id/submit', addResponse, addAnswer);
router.get('/posts/:id/responses', getSurveyAnswers);
router.delete('/posts/:id', deletePost);
router.get('/responses', getAllAnswers);
router.get('/users', getAllUsers);
router.get('/users/:email', getUser);

module.exports = router;
