import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        trim: true,
    },
    email: {
        type: String,
        require: true,
        trim: true,
    },
    password: {
        type: String,
        require: true,
        trim: true,
    },
    confirmPassword: {
        type: String,
        require: true,
        trim: true,
    },
    role: {
        type: String,
        require: true,
        enum: ["Stuff", "Manager", "Admin"],
    },
    image: {
        type: String,
        required: true,
        validate: [validator.isURL, "wrong url, please provide correct url"]
    },
},
    {
        timestamps: true
    })

const User = mongoose.model('User', userSchema)

export default User