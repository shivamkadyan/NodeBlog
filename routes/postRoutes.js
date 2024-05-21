// routes/postRoutes.js
const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

// Get all posts
router.get('/', postController.getAllPosts);

// Get a specific post by ID
router.get('/:id', postController.getPostById);

// Add a new post
router.post('/', postController.addPost);

module.exports = router;
