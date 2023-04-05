import express from "express";
import { UpdateMedicine, createMedicine, deleteMedicine, getMedicine } from "../../controllers/medicineController.js";


const medicineRoute = express.Router();

medicineRoute.route('/').post(createMedicine).get(getMedicine)
medicineRoute.route('/:id').patch(UpdateMedicine).delete(deleteMedicine)

export default medicineRoute;