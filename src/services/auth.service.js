import * as authModel from '../model/auth.model.js';

export const getAllUsers = async () => {
  return authModel.getAllUsers();
};

export const getUserByEmail = async (id) => {
    return authModel.getUserByEmail(id);
};

export const createUser = async (user) => {
    return authModel.createUser(user);
};

export const deleteUser = async (id) => {
    return authModel.deleteUser(id);
};

export const updateUser = async (id, user) => {
    return authModel.updateUser(id, user);
}