import express from "express";
import { createSupplier, getSupplier } from "../../controllers/supplierController.js";

const supplierRoute = express.Router();

supplierRoute.route('/').post(createSupplier).get(getSupplier)


export default supplierRoute;