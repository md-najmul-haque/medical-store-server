import app from './app.js'
import mongoose from 'mongoose'
import dotenv from "dotenv";
dotenv.config();
import colors from "colors"

const port = process.env.PORT || 5000

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.jcndkzu.mongodb.net/?retryWrites=true&w=majority`).then(() => {
    console.log(`Database connect successfully by mongoose`.yellow.bold)
})

app.listen(port, () => {
    console.log(`port is listening to the ${port}`)
})