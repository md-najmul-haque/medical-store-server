import { createCustomerService, getCustomerService } from "../services/customerServices.js"

export const createCustomer = async (req, res, next) => {

    try {
        const data = req.body
        const customer = await createCustomerService(data)

        res.status(200).json({
            status: 'success',
            message: "customer information saved successfully",
            customerInfo: customer
        })


    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: "Fail to save customer info",
        })
    }

}

export const getCustomer = async (req, res, next) => {

    try {

        const customer = await getCustomerService()

        res.status(200).json({
            status: 'success',
            message: "Load all customer information successfully",
            customerInfo: customer
        })


    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: "Fail to load customer info",
        })
    }

}