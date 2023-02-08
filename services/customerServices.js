import Customer from "../models/Customer.js";


export const createCustomerService = async (data) => {
    const customer = await Customer.create(data);
    return customer
}

export const getCustomerService = async () => {
    const customer = await Customer.find({});
    return customer
}