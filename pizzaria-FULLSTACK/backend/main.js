import express from "express"
import "dotenv/config"
import cors from "cors";
import * as db from "./db/dbgeral.js"

const PORT = process.env.PORT
const app = express()

app.use(express.json())
app.use(express.urlencoded({  extended: true  }))
app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}))

app.get("/", (req,res)=>{
    res.send("Hello World")
})

app.post("/register", (req,res)=>{
    const requisicao = req.body

    const user = requisicao.user;
    const senha = requisicao.senha;
    
    db.criarperfil(user,senha)

    console.log(`usuario: ${user} e senha: ${senha}`);
    
    res.status(200).json({
        message:"opa"
    })
    
})



app.listen(PORT, () =>{
    console.log(`porta aberta ${PORT}`)
})