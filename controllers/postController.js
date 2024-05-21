// controllers/postController.js
const Post = require('../models/Post');

exports.getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getPostById = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post == null) {
            return res.status(404).json({ message: 'Post not found' });
        }
        res.json(post);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};

exports.addPost = async (req, res) => {
    const post = new Post({
        title: req.body.title,
        content: req.body.content
    });
    try {
        const newPost = await post.save();
        res.status(201).json(newPost);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
