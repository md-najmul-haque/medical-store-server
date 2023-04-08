import app from './app.js'
import mongoose from 'mongoose'
import dotenv from "dotenv";
dotenv.config();
import colors from "colors"

const port = process.env.PORT || 5000

mongoose.connect(`mongodb+srv://medical-pos:vduGqqOOYC4lXFuN@cluster0.jcndkzu.mongodb.net/medicalStore`).then(() => {
    console.log(`Database connect successfully by mongoose`.yellow.bold)
})


app.listen(port, () => {
    console.log(`port is listening to the ${port}`)
})