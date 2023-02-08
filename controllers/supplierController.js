

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
            supplierInfo: supplier
        })


    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: "Fail to load supplier info",
        })
    }

}