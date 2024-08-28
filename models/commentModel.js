const mongoose = require("mongoose");

const commentSchema = mongoose.Schema(
    {
        post: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Blog"
        },
        user: {
            type: String,
            required: true,
        },
        body: {
            type: String,
            required: true
        }
    },
    { Timestamp: true }
);

module.exports = mongoose.model("Comment", commentSchema);