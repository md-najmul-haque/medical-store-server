import express from "express"
import { createCategory } from "../../controllers/CategoryController.js"

const categoryRoute = express.Router()

categoryRoute.route("/").get(createCategory)

export default categoryRoute; 