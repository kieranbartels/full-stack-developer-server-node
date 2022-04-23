import mongoose from 'mongoose';
const tuitsSchema = mongoose.Schema({
    tuit: String,
    likes: Number,
    postedBy: {
        username: String
    },
    dislikes: Number,
    comments: Number,
    retuits: Number,
    handle: String,
    "avatar-image": String,
    liked: Boolean,
    disliked: Boolean
}, {collection: 'tuits'});
export default tuitsSchema;