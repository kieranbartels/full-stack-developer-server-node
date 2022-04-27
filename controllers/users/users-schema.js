import mongoose from 'mongoose';
const usersSchema = mongoose.Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    handle: String,
    firstName: String,
    lastName: String,
    date: String,
    avatarImage: String,
    role: {type: String, enum: ["ADMIN", "USER"], default: "USER"}
}, {collection: "users"})
export default usersSchema;