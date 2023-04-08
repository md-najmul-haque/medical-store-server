import express from "express"
import { createCategory, deleteCategory, getCategory, UpdateCategory } from "../../controllers/CategoryController.js"

const categoryRoute = express.Router()

categoryRoute.route("/").post(createCategory).get(getCategory)

categoryRoute.route('/:id').patch(UpdateCategory).delete(deleteCategory)

export default categoryRoute; 