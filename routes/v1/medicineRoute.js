import express from "express";
import { createMedicine, getMedicine } from "../../controllers/medicineController.js";


const medicineRoute = express.Router();

medicineRoute.route('/').post(createMedicine).get(getMedicine)

export default medicineRoute;