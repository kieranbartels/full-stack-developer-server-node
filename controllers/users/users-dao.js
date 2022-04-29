import usersModel from './users-model.js';
export const findAllUsers = () => usersModel.find();
export const findUserById = (id) => usersModel.findById(id);
export const findUserByHandle = (handle) => usersModel.findOne({handle});
export const findUserByEmail = (email) => usersModel.findOne({email});
export const findUserByCredentials = (email, password) => usersModel.findOne({email, password});
export const createUser = (user) => usersModel.create(user);
export const deleteUser = (id) => usersModel.deleteOne({_id: id});
export const updateUser = (id, updatedUser) => usersModel.updateOne({_id: id}, {$set: updatedUser});
