import express from "express";
import { UpdateSupplier, createSupplier, deleteSupplier, getSupplier } from "../../controllers/supplierController.js";

const supplierRoute = express.Router();

supplierRoute.route('/').post(createSupplier).get(getSupplier)
supplierRoute.route('/:id').patch(UpdateSupplier).delete(deleteSupplier)

export default supplierRoute;