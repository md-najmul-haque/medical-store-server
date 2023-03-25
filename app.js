import express from "express";
const app = express()
import cors from 'cors'
import medicineRoute from "./routes/v1/medicineRoute.js";
import customerRoute from "./routes/v1/customerRoute.js";
import supplierRoute from "./routes/v1/supplierRoute.js";
import userRoute from "./routes/v1/userRoute.js";
import categoryRoute from "./routes/v1/CategoryRoute.js";


//middleware
app.use(cors())
app.use(express.json())

//route
app.use('/api/v1/medicine', medicineRoute)
app.use('/api/v1/customer', customerRoute)
app.use('/api/v1/supplier', supplierRoute)
app.use('/api/v1/category', categoryRoute)
app.use('/api/v1', userRoute)

app.get('/', (req, res) => {
    res.status(200).json({
        status: "success",
        message: "Medical store server is running"
    })
})

export default app