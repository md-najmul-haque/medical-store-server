import express from "express";
import { createUser, loginUser } from "../../controllers/userController.js";


const userRouter = express.Router();

userRouter.route('/register').post(createUser)
userRouter.route('/login').post(loginUser)


export default userRouter;