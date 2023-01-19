import express from "express";
const app = express()
import cors from 'cors'

//middleware
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({
        status: "success",
        message: "Medical store server is running"
    })
})

export default app