import mongoose from 'mongoose';
import usersModel from '../users/users-model.js';

const tuitsSchema = mongoose.Schema({
    tuit: String,
    _user: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
    likes: Number,
    dislikes: Number,
    comments: Number,
    retuits: Number,
    liked: Boolean,
    disliked: Boolean,
}, {collection: 'tuits'});
export default tuitsSchema;