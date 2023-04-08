import { createCategoryService, deleteCategoryService, getCategoryService, updateCategoryService } from "../services/categoryServices.js"


export const createCategory = async (req, res, next) => {

    try {
        const data = req.body
        console.log(data)
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

        const category = await getCategoryService()

        res.status(200).json({
            status: 'success',
            message: "Category information loaded successfully",
            category: category
        })


    } catch (error) {
        res.status(400).json({
            status: 'failed',
            message: "Failed to load category info",

        })
    }

}

// category update(patch) API
export const UpdateCategory = async (req, res) => {

    try {
        const data = req.body
        const id = req.params.id

        const supplier = await updateCategoryService(data, id)

        res.status(200).json({
            status: 'success',
            message: "Category updated successful",
            supplier: supplier

        })

    } catch (error) {
        res.status(400).json({
            status: 'failed',
            message: "Failed to update cas",

        })
    }


}

export const deleteCategory = async (req, res, next) => {

    try {
        const id = req.params.id
        const category = await deleteCategoryService(id)

        res.status(200).json({
            status: 'success',
            message: "Category information deleted successfully",
            category: category
        })


    } catch (error) {
        res.status(400).json({
            status: 'failed',
            message: "Failed to delete category info",

        })
    }

}