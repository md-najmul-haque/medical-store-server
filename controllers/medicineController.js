import { createMedicineService, getDeleteMedicineService, getMedicineService } from "../services/medicineService.js"

export const createMedicine = async (req, res, next) => {

    try {
        const data = req.body
        const medicine = await createMedicineService(data)

        res.status(200).json({
            status: 'success',
            message: "Medicine information saved successfully",
            medicine: medicine
        })


    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: "Fail to save medicine info",

        })
    }

}

export const getMedicine = async (req, res, next) => {

    try {

        const medicine = await getMedicineService()

        res.status(200).json({
            status: 'success',
            message: "Load all medicine information successfully",
            medicine
        })


    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: "Fail to load medicine info",

        })
    }

}


//delete specific medicine
export const deleteMedicine = async (req, res, next) => {

    try {
        const id = req.params.id
        const medicine = await getDeleteMedicineService(id)

        res.status(200).json({
            status: 'success',
            message: "Medicine deleted successfully",
            medicine
        })


    } catch (error) {
        res.status(400).json({
            status: 'failed',
            message: "Failed to delete medicine",

        })
    }

}