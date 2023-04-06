import User from "../models/User.js"
import bcrypt from "bcrypt"


export const createUserService = async (data) => {

    const { name, email, password, role, image } = data

    const salt = await bcrypt.genSalt(12)
    const hashPassword = await bcrypt.hash(password, salt)

    const doc = new User({
        name: name,
        email: email,
        password: hashPassword,
        role: role,
        image: image
    })

    const user = await doc.save()

    return user

}


export const getUserService = async () => {
    const user = await User.find({}).select('-password')
    return user;
}

// update user 
export const updateUserService = async (data, id) => {

    const { name, email, role } = data

    const result = await User.findOneAndUpdate(
        { _id: id },
        {
            $set: {
                name: name,
                email: email,
                role: role
            }

        },
        { upsert: true }
    )

    return result

}


//change password

export const updatePasswordService = async (password, id) => {

    const salt = await bcrypt.genSalt(12)
    const hashPassword = await bcrypt.hash(password, salt)

    const result = await User.findOneAndUpdate(
        { _id: id },
        {
            $set: {
                password: hashPassword,
            }

        },
        { upsert: true }
    )

    return result

}


export const deleteUserService = async (id) => {
    const user = await User.findOneAndDelete({ _id: id })
    return user;
} 