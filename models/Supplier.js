import mongoose from "mongoose";
import validator from "validator";

const { ObjectId } = mongoose.Schema.Types;


const supplierSchema = mongoose.Schema({
    supplierId: {
        type: Number,
        required: [true, "Please provide a id"],
        trim: true,
        unique: [true, "Supplier Id must be unique"],
    },
    supplierName: {
        type: String,
        required: [true, "Please provide a name"],
        trim: true,
        minLength: [3, "Name must be at least 3 characters."],
        maxLength: [100, "Name is too large"],
    },
    supplierPhoneNo: {
        type: String,
        required: [true, "Please provide a supplier contact number"],
        validate: {
            validator: (value) => {
                return validator.isMobilePhone(value);
            },
            message: "Please provide a valid phone number",
        }
    },
    email: {
        type: String,
        validate: [validator.isEmail, "Provide a valid Email"],
        lowercase: true,
        trim: true,
        unique: true,
    },
    medicines: [{
        type: ObjectId,
        ref: "Medicine"
    }],
    address: {
        type: String,
        required: [true, "Please provide supplier address"],
    },
    district: {
        type: String,
        required: [true, "Please provide supplier district"],
    },
    thana: {
        type: String,
        required: [true, "Please provide supplier thana"],
    },
    zipCode: {
        type: Number,
        minLength: [4, "Name must be at least 4 characters."],
        required: [true, "Please provide zipCode"],
    },

    contactPerson: {
        type: String,
        required: [true, "Please provide a contact person name"],
        trim: true,
        minLength: [3, "Name must be at least 3 characters."],
        maxLength: [100, "Name is too large"],
    },
    contactPersonPhoneNo: {
        type: String,
        required: [true, "Please provide a contact person phone number"],
        validate: {
            validator: (value) => {
                return validator.isMobilePhone(value);
            },
            message: "Please provide a valid contact person phone number",
        }
    },
    status: {
        type: String,
        default: "Active",
        enum: ["Active", "Inactive"],
    }
}, {
    timestamps: true
})

const Supplier = mongoose.model('Supplier', supplierSchema);

export default Supplier