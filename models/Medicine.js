import mongoose from "mongoose";

const medicineSchema = mongoose.Schema({
    medicineName: {
        type: String,
        require: [true, 'please provide medicine name'],
        trim: true
    },
    type: {
        type: String,
        require: true,
        enum: {
            value: ['tablet', 'capsule', 'drop', 'syrup', 'ointment', 'injection'],
            message: "Medicine type can't be {VALUE}, must be tablet/capsule/drop/syrup/ointment/injection"
        }
    },

})