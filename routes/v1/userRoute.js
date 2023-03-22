import express from "express";
import UserController from "../../controllers/userController.js";


const userRouter = express.Router();

userRouter.route('/').post(UserController.userRegistration)


export default userRouter;