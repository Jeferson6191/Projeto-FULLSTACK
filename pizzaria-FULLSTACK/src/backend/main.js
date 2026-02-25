import express from "express"
const app = express()
import "dotenv/config"
const PORT = process.env.PORT

app.get("/", (req,res)=>{
    res.send("Hello World")
})

app.listen(PORT, () =>{
    console.log(`porta aberta ${PORT}`)
})