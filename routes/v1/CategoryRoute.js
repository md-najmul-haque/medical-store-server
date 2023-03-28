import express from "express"
import { createCategory, deleteCategory, getCategory } from "../../controllers/CategoryController.js"

const categoryRoute = express.Router()

categoryRoute.route("/").post(createCategory).get(getCategory)

categoryRoute.route('/:id').delete(deleteCategory)

export default categoryRoute; 