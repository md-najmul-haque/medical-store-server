import express from "express";
import { createSupplier, deleteSupplier, getSupplier } from "../../controllers/supplierController.js";

const supplierRoute = express.Router();

supplierRoute.route('/').post(createSupplier).get(getSupplier)
supplierRoute.route('/:id').delete(deleteSupplier)

export default supplierRoute;