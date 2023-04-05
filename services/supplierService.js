import Supplier from "../models/Supplier.js";

export const createSupplierService = async (data) => {
    const supplier = await Supplier.create(data);
    return supplier
}

export const getSupplierService = async () => {
    const supplier = await Supplier.find({});
    return supplier
}

//Update Supplier 
export const updateSupplierService = async (data, id) => {

    const result = await Supplier.findOneAndUpdate(
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

export const deleteSupplierService = async (id) => {
    const supplier = await Supplier.findOneAndDelete({ _id: id });
    return supplier
}



