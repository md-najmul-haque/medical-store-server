import mongoose from "mongoose";
import validator from "validator";

const customerSchema = mongoose.Schema({
    customerName: {
        type: String,
        require: [true, 'please provide customer name'],
        trim: true
    },
    phoneNumber: [{
        type: String,
        required: [true, "Please provide a contact number"],
        validate: {
            validator: (value) => {
                return validator.isMobilePhone(value);
            },
            message: "Please provide a valid phone number",
        }
    }],
    email: {
        type: String,
        validate: [validator.isEmail, "Provide a valid Email"],
        trim: true,
        lowercase: true,
        unique: true,
    },
    address: {
        type: String,
        required: [true, "Please provide customer address"],
    },
    area: {
        type: String,
        required: [true, "Please provide customer area"],
    }
},
    {
        timestamps: true
    })


const Customer = mongoose.model('Customer', customerSchema)

export default Customer; 