const Like = require("../models/likeModel");
const Post = require("../models/blogModel");

exports.likePost = async (req, res) => {
    try {
        const { post, user } = req.body;
        const like = new Like({
            post, user,
        });
        const savedLike = await like.save();

        //update post collection basis on this
        const updatedPost = await Post.findByIdAndUpdate(post,
            {
                $push: { comments: savedLike._id },
            },
            { new: true }
        ).populate("likes").populate("comments").exec() //populate likes array with like documents
        res.status(201).json(
            {
                success: true,
                message: "likes created and data updated successfully",
                data: updatedPost
            }
        )
    } catch (error) {
        return res.status(400).json(
            {
                success: false,
                error: "Error while liking post",
                error: error.message
            }
        )
    }
}

exports.unlikePost = async (req, res) => {
    try {
        const { post, like } = req.body;

        const deletedLike = await Like.findOneAndDelete(
            {
                post: post,
                _id: like
            }
        );
        // update post collection 
        const updatedPost = await Post.findByIdAndUpdate(post,
            {
                $pull: { likes: deletedLike._id }
            }, { new: true }
        )
        res.json({
            post: updatedPost
        })
    } catch (error) {
        return res.status(400).json(
            {
                success: false,
                error: "Error while un-liking post",
                error: error.message
            }
        )
    }
}