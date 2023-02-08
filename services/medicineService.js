import Medicine from "../models/Medicine.js"

export const createMedicineService = async (data) => {

    const medicine = await Medicine.create(data);

    return medicine
}

export const getMedicineService = async (data) => {

    const medicine = await Medicine.create(data);

    return medicine
}