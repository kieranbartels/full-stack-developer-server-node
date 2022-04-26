import mongoose from 'mongoose';
const usersSchema = mongoose.Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    handle: String,
    firstName: String,
    lastName: String,
    date: String
}, {collection: "users"})
export default usersSchema;