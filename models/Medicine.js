import mongoose from "mongoose";
import validator from "validator";

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
    medicineCategory: {
        type: String,
        require: true,
        enum: {
            values: ['Tablet', 'Capsule', 'Drop', 'Syrup', 'Ointment', 'Injection'],
            message: "Medicine type can't be {VALUE}, must be tablet/capsule/drop/syrup/ointment/injection"
        }
    },
    supplierName: {
        type: String,
        require: [true, 'Please enter supplier name']
    },
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
    imageURL: [{
        type: String,
        required: true,
        validate: [validator.isURL, "wrong url, please provide correct url"]
    }],
    remarks: {
        type: String,
    }
})

const Medicine = mongoose.model('Medicine', medicineSchema);

export default Medicine;