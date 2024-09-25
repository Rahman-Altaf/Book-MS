import express from 'express'
import dotenv from 'dotenv'

const app = express()
dotenv.config()
app.listen(process.dotenv.PORT,()=> {
    console.log("Server Is Running")
})

