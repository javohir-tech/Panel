const express = require("express");
const mongoose = require("mongoose")

const app = express()

//dotenv
require("dotenv").config()

//middlewares
app.use(express.json())

//router
app.use("/api/post", require("./routes/post.router"))


const PORT = process.env.PORT;

const startApp = async () => {
    try {
        await mongoose.connect(process.env.DB_URL).then(() => {
            console.log("Connected DB_URL")
    
            app.listen(PORT, () => {
                console.log(`Listening on : http://localhost:${PORT}`)
            })
    
        })
    } catch (error) {
        console.log(`Connected Error with DB: ${error}`)
    }
}

startApp()