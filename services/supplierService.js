import Supplier from "../models/Supplier.js";

export const createSupplierService = async (data) => {
    const supplier = await Supplier.create(data);
    return supplier
}

export const getSupplierService = async () => {
    const supplier = await Supplier.find({});
    return supplier
}

export const deleteSupplierService = async (id) => {
    const supplier = await Supplier.findOneAndDelete({ _id: id });
    return supplier
}



