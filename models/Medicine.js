import mongoose from "mongoose";
import validator from "validator";

const { ObjectId } = mongoose.Schema.Types;

const medicineSchema = mongoose.Schema({
    medicineName: {
        type: String,
        require: [true, 'please provide medicine name'],
        trim: true
    },
    genericName: {
        type: String,
        require: [true, 'Please enter generic name']
    },
    category: {
        type: String,
        require: true,
        lowercase: true,
        enum: {
            values: ['tablet', 'capsule', 'drop', 'syrup', 'ointment', 'injection'],
            message: "Medicine type can't be {VALUE}, must be tablet/capsule/drop/syrup/ointment/injection"
        }
    },
    supplier: {
        supplierName: {
            type: String,
            required: true,
        },
        id: {
            type: ObjectId,
            ref: "Supplier",
            required: true,
        }
    }
    ,
    brandName: {
        type: String,
        require: [true, 'Please enter brand name']
    },
    unit: {
        type: String,
        require: [true, 'Please enter measurement unit']
    },
    origin: {
        type: String,
        require: [true, 'Please enter country of origin']
    },
    lotControl: {
        type: String,
    },
    quantity: {
        type: Number,
        require: [true, 'Please enter medicine quantity']
    },
    expData: {
        type: Date,
        require: [true, 'Please enter medicine expire date']
    },
    batchNo: {
        type: String,
        require: [true, 'Please enter batch no']
    },
    price: {
        type: Number,
        require: [true, 'Please enter medicine price']
    },
    imageURL: {
        type: String,
        required: true,
        validate: [validator.isURL, "wrong url, please provide correct url"]
    },
    remarks: {
        type: String,
    }
})

const Medicine = mongoose.model('Medicine', medicineSchema);

export default Medicine;