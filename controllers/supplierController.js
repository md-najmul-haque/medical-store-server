import { createSupplierService, deleteSupplierService, getSupplierService, updateSupplierService } from "../services/supplierService.js"


export const createSupplier = async (req, res, next) => {

    try {
        const data = req.body
        const supplier = await createSupplierService(data)

        res.status(200).json({
            status: 'success',
            message: "supplier information saved successfully",
            supplierInfo: supplier
        })


    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: "Fail to save supplier info",
        })
    }

}

export const getSupplier = async (req, res, next) => {

    try {

        const supplier = await getSupplierService()

        res.status(200).json({
            status: 'success',
            message: "Load all supplier information successfully",
            supplier: supplier
        })


    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: "Fail to load supplier info",
        })
    }

}

// user update(patch) API
export const UpdateSupplier = async (req, res) => {

    try {
        const data = req.body
        const id = req.params.id

        const supplier = await updateSupplierService(data, id)

        res.status(200).json({
            status: 'success',
            message: "Supplier updated successful",
            supplier: supplier

        })

    } catch (error) {
        res.status(400).json({
            status: 'failed',
            message: "Failed to update user",

        })
    }


}


export const deleteSupplier = async (req, res, next) => {

    const { id } = req.params

    try {

        const supplier = await deleteSupplierService(id)

        res.status(200).json({
            status: 'success',
            message: "Delete supplier information successfully",
            supplier: supplier
        })


    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: "Fail to delete supplier info",
        })
    }

}