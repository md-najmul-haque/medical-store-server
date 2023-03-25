import Category from "../models/Category.js"


export const createCategoryService = async (data) => {
    const category = await Category.create(data)
    return category
}