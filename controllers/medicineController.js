import { createMedicineService, getMedicineService } from "../services/medicineService.js"

export const createMedicine = async (req, res, next) => {

    try {
        const data = req.body
        const medicine = await createMedicineService(data)

        res.status(200).json({
            status: 'success',
            message: "Medicine information saved successfully",
            medicineInfo: medicine
        })


    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: "Fail to save medicine info",
            medicineInfo: medicine
        })
    }

}

export const getMedicine = async (req, res, next) => {

    try {

        const medicine = await getMedicineService()

        res.status(200).json({
            status: 'success',
            message: "Load all medicine information successfully",
            medicineInfo: medicine
        })


    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: "Fail to load medicine info",
            medicineInfo: medicine
        })
    }

}