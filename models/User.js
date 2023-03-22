import mongoose from "mongoose";

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
    }
})

const User = mongoose.model('User', userSchema)

export default User