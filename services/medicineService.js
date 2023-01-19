import Medicine from "../models/Medicine.js"

export const createMedicineService = async (data) => {

    const product = await Medicine.create(data);

    return product
}