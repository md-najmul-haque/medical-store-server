import express from "express";
import { createMedicine, getMedicine } from "../../controllers/medicineController.js";



const medicineRouter = express.Router();

medicineRouter.route('/').post(createMedicine).get(getMedicine)

export default medicineRouter;