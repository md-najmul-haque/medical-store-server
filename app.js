import express from "express";
const app = express()
import cors from 'cors'

import medicineRouter from "./routes/v1/medicineRoute.js";
import customerRouter from "./routes/v1/customerRoute.js";
import supplierRouter from "./routes/v1/supplierRoute.js";


//middleware
app.use(cors())
app.use(express.json())

//route
app.use('/api/v1/medicine', medicineRouter)
app.use('/api/v1/customer', customerRouter)
app.use('/api/v1/supplier', supplierRouter)

app.get('/', (req, res) => {
    res.status(200).json({
        status: "success",
        message: "Medical store server is running"
    })
})

export default app