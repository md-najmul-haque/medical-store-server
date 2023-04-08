import Category from "../models/Category.js"


export const createCategoryService = async (data) => {
    const category = await Category.create(data)
    return category
}

export const getCategoryService = async () => {
    const category = await Category.find({});
    return category
}
// update user 
export const updateCategoryService = async (data, id) => {

    const result = await User.findOneAndUpdate(
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

export const deleteCategoryService = async (id) => {
    const category = await Category.findOneAndDelete({ _id: id })
    return category
}