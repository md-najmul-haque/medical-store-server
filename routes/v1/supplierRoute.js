import express from "express";
import { createSupplier, getSupplier } from "../../controllers/supplierController.js";

const supplierRouter = express.Router();

supplierRouter.route('/').post(createSupplier).get(getSupplier)


export default supplierRouter;