import express from "express"
import "dotenv/config"
import cors from "cors";

const app = express()
const PORT = process.env.PORT

app.use(express.json())
app.use(express.urlencoded({  extended: true  }))
app.use(cors())

app.get("/", (req,res)=>{
    res.send("Hello World")
})

app.post("/register", (req,res)=>{
    const request = req.body
    console.log(request);
    
    res.send(request)
    
})



app.listen(PORT, () =>{
    console.log(`porta aberta ${PORT}`)
})