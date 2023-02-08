import express from "express";
import { createCustomer, getCustomer } from "../../controllers/customerController.js";


const customerRouter = express.Router();

customerRouter.route('/').post(createCustomer).get(getCustomer)


export default customerRouter;