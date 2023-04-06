import mongoose from "mongoose";
import validator from "validator";


const categorySchema = mongoose.Schema({
    catId: {
        type: String,
        required: [true, "Please provide a id"],
        trim: true,
        unique: true,
    },
    categoryName: {
        type: String,
        required: [true, "Please provide a category name"],
        trim: true,
        lowercase: true,
        minLength: [3, "Name must be at least 3 characters."],
        maxLength: [20, "Name is too large"],
    },
    image: [{
        type: String,
        required: true,
        validate: [validator.isURL, "wrong url, please provide correct url"]
    }],
    status: {
        type: String,
        default: "active",
        enum: ["active", "inactive"],
        lowercase: true,
    }
}, {
    timestamps: true
})

const Category = mongoose.model('Category', categorySchema);

export default Category