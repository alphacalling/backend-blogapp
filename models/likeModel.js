const mongoose = require("mongoose");

const likeSchema = mongoose.Schema(
    {
        post: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Blog"
        },
        user: {
            type: String,
            required: true
        }
    },
    { Timestamp: true }
);

module.exports = mongoose.model("Like", likeSchema);