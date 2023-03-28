import express from "express";
import { createMedicine, deleteMedicine, getMedicine } from "../../controllers/medicineController.js";


const medicineRoute = express.Router();

medicineRoute.route('/').post(createMedicine).get(getMedicine)
medicineRoute.route('/:id').delete(deleteMedicine)

export default medicineRoute;