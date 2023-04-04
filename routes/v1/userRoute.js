import express from "express";
import { UpdateUser, createUser, deleteUser, getUser, loginUser } from "../../controllers/userController.js";


const userRoute = express.Router();

userRoute.route('/register').post(createUser)
userRoute.route('/login').post(loginUser)
userRoute.route('/user').get(getUser)
userRoute.route('/user/:id').patch(UpdateUser).delete(deleteUser)


export default userRoute;