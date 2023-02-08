import express from "express";
const app = express()
import cors from 'cors'
import medicineRouter from "./routes/v1/medicineRoute.js";


//middleware
app.use(cors())
app.use(express.json())

app.use('/api/v1/medicine', medicineRouter)

app.get('/', (req, res) => {
    res.status(200).json({
        status: "success",
        message: "Medical store server is running"
    })
})

export default app