import express from 'express';
// Import all the controllers
import {
  createUsers,
  getAllUsers,
  getUserInfoByID,
  updateUser,
  deleteUser,
} from '../controllers/user.controller.js';

const user_router = express.Router();

// Route to get all users
user_router.route('/getallusers').get(getAllUsers);

// Route to create a new user
user_router.route('/create').post(createUsers);

// Route to get a specific user by ID
user_router.route('/getuser/:id').get(getUserInfoByID);

// Route to update a user by ID
user_router.route('/update/:id').patch(updateUser);

// Route to delete a user by ID
user_router.route('/delete/:id').delete(deleteUser);

export default user_router;
