import Supplier from "../models/Supplier.js";

export const createSupplierService = async (data) => {
    const supplier = await Supplier.create(data);
    return supplier
}

export const getSupplierService = async () => {
    const supplier = await Supplier.find({});
    return supplier
}