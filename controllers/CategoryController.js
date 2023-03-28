import { createCategoryService, getCategoryService } from "../services/categoryServices.js"


export const createCategory = async (req, res, next) => {

    try {
        const data = req.body
        const category = await createCategoryService(data)

        res.status(200).json({
            status: 'success',
            message: "Category information saved successfully",
            categoryInfo: category
        })


    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: "Fail to save category info",

        })
    }

}


export const getCategory = async (req, res, next) => {

    try {

        const category = await getCategoryService(data)

        res.status(200).json({
            status: 'success',
            message: "Category information loaded successfully",
            category: category
        })


    } catch (error) {
        res.status(400).json({
            status: 'failed',
            message: "Failed to save category info",

        })
    }

}