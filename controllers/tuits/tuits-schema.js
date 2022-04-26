import mongoose from 'mongoose';
const tuitsSchema = mongoose.Schema({
    tuit: String,
    likes: Number,
    firstName: String,
    lastName: String,
    dislikes: Number,
    comments: Number,
    retuits: Number,
    handle: String,
    "avatar-image": String,
    liked: Boolean,
    disliked: Boolean,
    role: {
        type: String,
        enum : ['user','admin'],
        default: 'user'
    }
}, {collection: 'tuits'});
export default tuitsSchema;