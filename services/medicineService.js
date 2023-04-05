import Medicine from "../models/Medicine.js"

export const createMedicineService = async (data) => {

    const medicine = await Medicine.create(data);

    return medicine
}

export const getMedicineService = async (data) => {

    const medicine = await Medicine.find({});

    return medicine
}


//Update Medicine 
export const updateMedicineService = async (data, id) => {


    const result = await Medicine.findOneAndUpdate(
        { _id: id },
        {
            $set: {

                ...data
            }

        },
        { upsert: true }
    )

    return result

}

export const getDeleteMedicineService = async (id) => {
    const medicine = await Medicine.findOneAndDelete({ _id: id })
    return medicine
}