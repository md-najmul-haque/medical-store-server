import { createUserService } from "../services/userServices.js"



class UserController {
    static userRegistration = async (req, res) => {

        try {
            const data = req.body
            const user = await createUserService(data)

            res.status(200).json({
                status: 'success',
                message: "User registration successful",
                userInfo: user
            })

        } catch (error) {
            res.status(400).json({
                status: 'fail',
                message: "Fail to register user",

            })
        }

    }
}

export default UserController