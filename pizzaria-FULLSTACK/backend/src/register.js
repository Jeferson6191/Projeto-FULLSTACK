
import express from "express";
import "dotenv/config";
import cors from "cors";
import * as db from "./db/dbgeral.js";
import chalk from "chalk";


const registerroutes = express();

registerroutes.use(express.json());
registerroutes.use(express.urlencoded({  extended: true  }));
registerroutes.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));


registerroutes.get("/", (req,res)=>{
    res.send("Hello World")
});

registerroutes.post("/register", async(req,res)=>{
    const requisicao = req.body

    const user = requisicao.user;
    const senha = requisicao.senha;
    console.log(senha);
    
    // tratamento de erros de escrita
    if (user.length<3) {
        console.log(chalk.red("O Usuario deve ter no minimo 3 caracteres"));
        
        res.status(400).json({
        success: false,
        message:"O Usuario deve ter no minimo 3 caracteres"
    })    
    }else if (senha.length<6) {
        console.log(chalk.red("O Usuario deve ter no minimo 6 caracteres"));

        res.status(400).json({
        success: false,
        message:"O Senha deve ter no minimo 6 caracteres"})
        
    }else if (Number(user.slice(0,1))) {
        console.log(user.slice(0,1));
        console.log(chalk.red("O Usuario não pode iniciar com número"));
        
        res.status(400).json({
        success: false,
        message:"O Usuario não pode iniciar com número"})
    }else{
    
    const {status,data} = await db.criarperfil(user,senha)

    console.log(`status: ${JSON.stringify(status)} e mensagem: ${data.message}`);
    
    res.status(status).json(data)
}}
    
)


export default registerroutes