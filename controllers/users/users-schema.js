import mongoose from 'mongoose';
const usersSchema = mongoose.Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    handle: {type: String, unique : true},
    firstName: String,
    lastName: String,
    date: String,
    avatarImage: String,
    role: {type: String, enum: ["ADMIN", "USER"], default: "USER"},
    following: [{ type: mongoose.Schema.Types.ObjectId, ref: "user" }],
}, {collection: "users"})
export default usersSchema;