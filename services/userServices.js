import User from "../models/User.js"
import bcrypt from "bcrypt"


export const createUserService = async (data) => {

    const { name, email, password, role } = data

    const salt = await bcrypt.genSalt(12)
    const hashPassword = await bcrypt.hash(password, salt)

    const doc = new User({
        name: name,
        email: email,
        password: hashPassword,
        role: role
    })

    const user = await doc.save()

    return user

}


export const getUserService = async () => {
    const user = await User.find({})
    return user;
}


export const deleteUserService = async (id) => {
    const user = await User.findOneAndDelete({ _id: id })
    return user;
} 