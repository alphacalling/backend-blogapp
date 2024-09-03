const express = require("express");
const { createComment } = require("../controllers/commentController");
const { createPost, getAllPosts } = require("../controllers/blogController");
const { likePost, unlikePost } = require("../controllers/likeController");

const router = express.Router();


router.post("/posts/create", createPost);
router.get("/posts", getAllPosts);
router.post("/comments/create", createComment);
router.post("/likes/like", likePost);
router.post("/likes/unlike", unlikePost);


module.exports = router;