import mongoose from "mongoose";
import validator from "validator";


const supplierSchema = mongoose.Schema({
    supplierId: {
        type: String,
        required: [true, "Please provide a id"],
        trim: true,
    },
    supplierName: {
        type: String,
        required: [true, "Please provide a name"],
        trim: true,
        lowercase: true,
        minLength: [3, "Name must be at least 3 characters."],
        maxLength: [100, "Name is too large"],
    },
    supplierPhoneNo: [{
        type: String,
        required: [true, "Please provide a supplier contact number"],
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
        required: [true, "Please provide supplier address"],
    },
    contactPerson: {
        type: String,
        required: [true, "Please provide a contact person name"],
        trim: true,
        lowercase: true,
        minLength: [3, "Name must be at least 3 characters."],
        maxLength: [100, "Name is too large"],
    },
    contactPersonPhoneNo: [{
        type: String,
        required: [true, "Please provide a contact person phone number"],
        validate: {
            validator: (value) => {
                return validator.isMobilePhone(value);
            },
            message: "Please provide a valid contact person phone number",
        }
    }],
    status: {
        type: String,
        default: "active",
        enum: ["active", "inactive"],
    }
}, {
    timestamps: true
})

const Supplier = mongoose.model('Supplier', supplierSchema);

export default Supplier