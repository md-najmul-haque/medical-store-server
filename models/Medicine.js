import mongoose from "mongoose";

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
    supplierName: {
        type: String,
        require: [true, 'Please enter supplier name']
    },
    type: {
        type: String,
        require: true,
        enum: {
            value: ['tablet', 'capsule', 'drop', 'syrup', 'ointment', 'injection'],
            message: "Medicine type can't be {VALUE}, must be tablet/capsule/drop/syrup/ointment/injection"
        }
    },
    price: {
        type: Number,
        require: [true, 'Please enter medicine price']
    },
    imageURL: [{
        type: String,
        required: true,
        validate: [valid.isURL, "wrong url, please provide correct url"]
    }],
})

const Medicine = mongoose.model('Medicine', medicineSchema);

export default Medicine;