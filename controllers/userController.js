import User from "../models/User.js"
import { createUserService } from "../services/userServices.js"



export const createUser = async (req, res) => {

    try {
        const data = req.body
        const { name, email, password, confirmPassword } = data
        const user = await User.findOne({ email: email })
        console.log(user)

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

                    res.status(200).json({
                        status: 'success',
                        message: "User registration successful",
                        userInfo: user
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


export default createUser