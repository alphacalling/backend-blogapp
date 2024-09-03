const Post = require("../models/blogModel");

exports.createPost = async (req, res) => {
    try {
        const { title, body } = req.body;
        const post = new Post({
            title, body
        });
        const savedPost = await post.save();
        res.status(201).json(
            {
                success: true,
                message: "Post created and data updated successfully",
                post: savedPost
            }
        )
    } catch (error) {
        return res.status(400).json(
            {
                success: false,
                error: "Error while creating post",
                error: error.message
            }
        )
    }
}

exports.getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find()
        // .populate("comments")
        // .exec();
        res.status(201).json(
            {
                success: true,
                message: "All post fetched successfully",
                posts
            }
        )
    } catch (error) {
        return res.status(400).json(
            {
                success: false,
                error: "Error while creating post",
                error: error.message
            }
        )
    }
}