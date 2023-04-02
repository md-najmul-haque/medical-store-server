import app from './app.js'
import mongoose from 'mongoose'
import dotenv from "dotenv";
dotenv.config();
import colors from "colors"

const port = process.env.PORT || 5000


// mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@ac-wflgkou-shard-00-00.jcndkzu.mongodb.net:27017,ac-wflgkou-shard-00-01.jcndkzu.mongodb.net:27017,ac-wflgkou-shard-00-02.jcndkzu.mongodb.net:27017/?ssl=true&replicaSet=atlas-am69ua-shard-0&authSource=admin&retryWrites=true&w=majority`).then(() => {
//     console.log(`Database connect successfully by mongoose`.yellow.bold)
// })

mongoose.connect(`mongodb+srv://medical-pos:vduGqqOOYC4lXFuN@cluster0.jcndkzu.mongodb.net/medicalStore`).then(() => {
    console.log(`Database connect successfully by mongoose`.yellow.bold)
})


app.listen(port, () => {
    console.log(`port is listening to the ${port}`)
})