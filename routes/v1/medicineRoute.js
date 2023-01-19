import express from "express";
import { createMedicine } from "../../controllers/medicineController.js";



const medicineRouter = express.Router();

medicineRouter.route('/').post(createMedicine)

export default medicineRouter;