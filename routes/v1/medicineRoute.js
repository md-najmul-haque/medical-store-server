import express from "express";
import { createMedicineService } from "../../services/medicineService";


const medicineRouter = express.Router();

medicineRouter.route('/').post(createMedicineService)