import express from "express";
import { createCustomer, getCustomer } from "../../controllers/customerController.js";


const customerRoute = express.Router();

customerRoute.route('/').post(createCustomer).get(getCustomer)


export default customerRoute;