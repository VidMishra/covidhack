const express = require('express');
const { body } = require('express-validator/check');

const feedController = require('../controllers/feed');
// const isAuth = require('../middleware/is-auth');

const router = express.Router();

// GET /feed/posts
router.get('/posts', feedController.getPosts);

// POST /feed/post
router.post(
  '/post',
  feedController.createPost
);

router.delete('/post/:postId', feedController.deletePost);

module.exports = router;
