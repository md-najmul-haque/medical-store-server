import User from "../models/User.js"
import bcrypt from "bcrypt"


export const createUserService = async (data) => {

    const { name, email, password, confirmPassword } = data

    const user = await User.findOne({ email: email })
    console.log(user)

    if (user) {
        return res.status(401).json({
            status: 'failed',
            message: "Email already exist",

        })
    } else {

        if (name && email && password && confirmPassword) {

            if (password === confirmPassword) {

                const salt = await bcrypt.genSalt(12)
                const hashPassword = await bcrypt.hash(password, salt)

                const doc = new User({
                    name: name,
                    email: email,
                    password: hashPassword
                })

                const user = await doc.save()
                return user


            } else {
                return res.status(400).json({
                    status: 'failed',
                    message: "Password and confirm password doesn't matched",

                })
            }

        } else {
            return res.status(400).json({
                status: 'failed',
                message: "All field are required",

            })
        }
    }

}