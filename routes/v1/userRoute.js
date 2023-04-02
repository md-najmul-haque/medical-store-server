import express from "express";
import { createUser, getUser, loginUser } from "../../controllers/userController.js";


const userRoute = express.Router();

userRoute.route('/register').post(createUser)
userRoute.route('/login').post(loginUser)
userRoute.route('/user').get(getUser)


export default userRoute;