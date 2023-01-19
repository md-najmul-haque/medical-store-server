import Medicine from "../models/Medicine"

export const createMedicineService = async (data) => {

    const product = await Medicine.create(data);

    return product
}