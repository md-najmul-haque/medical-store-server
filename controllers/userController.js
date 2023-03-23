import User from "../models/User.js"
import { createUserService } from "../services/userServices.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"




export const createUser = async (req, res) => {

    try {
        const data = req.body
        const { name, email, password, confirmPassword } = data
        const user = await User.findOne({ email: email })
        // console.log(user)

        if (user) {
            return res.status(401).json({
                status: 'failed',
                message: "Email already exist",

            })
        }
        else {
            if (name && email && password && confirmPassword) {

                if (password === confirmPassword) {

                    const user = await createUserService(data)

                    //Generate JWT token
                    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: '1d' })

                    console.log(token)

                    res.status(200).json({
                        status: 'success',
                        message: "User registration successful",
                        userInfo: user,
                        token: token
                    })
                }
                else {
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
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: "Fail to register user",

        })
    }

}



export const loginUser = async (req, res) => {

    try {
        const data = req.body
        const { email, password } = data

        if (email && password) {

            const user = await User.findOne({ email: email })

            if (user) {
                const isMatch = await bcrypt.compare(password, user.password)

                if ((user.email === email) && isMatch) {

                    return res.status(200).json({
                        status: 'success',
                        message: "Login Success",

                    })

                } else {
                    return res.status(400).json({
                        status: 'failed',
                        message: "Email and password doesn't matched",

                    })
                }

            }
            else {
                return res.status(400).json({
                    status: 'failed',
                    message: "You are not registered user",

                })
            }

        } else {
            return res.status(400).json({
                status: 'failed',
                message: "All field are required",

            })

        }

    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: "Unable to login",

        })
    }

}