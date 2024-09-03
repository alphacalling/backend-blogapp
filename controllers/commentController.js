const Comment = require("../models/commentModel");
const Blog = require("../models/blogModel");

exports.createComment = async (req, res) => {
    try {
        const { post, user, body } = req.body;
        // create a comment object 
        const comment = new Comment(
            {
                post, user, body
            }
        );

        // save the new comment in db 
        const savedComment = await comment.save();

        //find post by ID and add new comment to comment array
        const updatedPost = await Blog.findByIdAndUpdate(post,
            {
                $push: { comments: savedComment._id }
            },
            { new: true }
        ).populate("comments").exec() //populate comments array with comment documents
        res.status(201).json(
            {
                success: true,
                message: "comment created and data updated successfully",
                data: updatedPost
            }
        )
    } catch (error) {
        res.status(501).json(
            {
                success: false,
                message: "Internal server error",
                error: error.message
            }
        )
    }
}