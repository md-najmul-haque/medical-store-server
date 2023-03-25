import express from "express";
import { createUser, loginUser } from "../../controllers/userController.js";


const userRoute = express.Router();

userRoute.route('/register').post(createUser)
userRoute.route('/login').post(loginUser)


export default userRoute;