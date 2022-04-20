const mongoose = require("mongoose")
const express = require("express")
const app = express()


const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const cors = require("cors")
require("dotenv").config();


//DB connection 
mongoose.connect(process.env.DATABASE, {
    
}).then(() => {
    console.log("DB connected")
}).catch(() => {
    console.log("UNABLE to connect to DB")
})

// Use parsing middleware

app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors())

//Import routes
const userRoutes= require("./routes/user")
// Using routes
app.use('/api', userRoutes)

const QuizItemsRoutes = require("./routes/QuizItems")
app.use('/api', QuizItemsRoutes)

//const port = process.env.PORT || 8000

// Starting a server
app.listen(8000, () => {
    console.log("started listening for resquests on port 8000");
})