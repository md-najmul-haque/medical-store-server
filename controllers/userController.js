import User from "../models/User.js"
import { createUserService, deleteUserService, getUserService, updateUserService } from "../services/userServices.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"


//create user
export const createUser = async (req, res) => {

    try {
        const data = req.body
        const { name, email, password, confirmPassword, role, image } = data
        const user = await User.findOne({ email: email })
        // console.log(user)

        if (user) {
            return res.status(401).json({
                status: 'failed',
                message: "Email already exist",

            })
        }
        else {
            if (name && email && password && confirmPassword && role && image) {

                if (password === confirmPassword) {

                    const user = await createUserService(data)

                    //Generate JWT token
                    // const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: '1d' })

                    // console.log(token)

                    res.status(200).json({
                        status: 'success',
                        message: "User created successful",
                        user: user

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


//login user
export const loginUser = async (req, res) => {

    try {
        const data = req.body
        const { email, password } = data

        if (email && password) {

            const user = await User.findOne({ email: email })

            if (user) {
                const isMatch = await bcrypt.compare(password, user.password)

                if ((user.email === email) && isMatch) {

                    //Generate JWT token
                    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: '1d' })

                    return res.status(200).json({
                        status: 'success',
                        message: "Login Success",
                        token: token

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

//get user
export const getUser = async (req, res, next) => {

    try {

        const user = await getUserService()

        res.status(200).json({
            status: 'success',
            message: "user information loaded successfully",
            user: user
        })


    } catch (error) {
        res.status(400).json({
            status: 'failed',
            message: "Failed to load user info",

        })
    }

}

// user update(patch) API
export const UpdateUser = async (req, res) => {

    try {
        const data = req.body
        const { name, email, role } = data
        const id = req.params.id


        if (name && email && role) {

            const user = await updateUserService(data, id)

            res.status(200).json({
                status: 'success',
                message: "User updated successful",
                user: user

            })
        }

        else {
            return res.status(400).json({
                status: 'failed',
                message: "All field are required",

            })
        }

    } catch (error) {
        res.status(400).json({
            status: 'failed',
            message: "Failed to update user",

        })
    }


}


// update password API
export const updatePassword = async (req, res) => {

    try {
        const data = req.body
        const { password, confirmPassword } = data
        const id = req.params.id


        if (password && confirmPassword) {

            if (password === confirmPassword) {

                const result = await updateUserService(data, id)

                res.status(200).json({
                    status: 'success',
                    message: "Password updated successful",


                })
            } else {
                return res.status(400).json({
                    status: 'failed',
                    message: "Password and confirm password doesn't matched",

                })
            }
        }

        else {
            return res.status(400).json({
                status: 'failed',
                message: "Both field are required",

            })
        }

    } catch (error) {
        res.status(400).json({
            status: 'failed',
            message: "Failed to update user",

        })
    }


}

//delete user
export const deleteUser = async (req, res, next) => {

    try {
        const id = req.params.id
        const user = await deleteUserService(id)

        res.status(200).json({
            status: 'success',
            message: "User deleted successfully",

        })


    } catch (error) {
        res.status(400).json({
            status: 'failed',
            message: "Failed to delete user",

        })
    }

}
