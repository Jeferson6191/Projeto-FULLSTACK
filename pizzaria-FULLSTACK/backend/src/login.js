
import express from "express";
import "dotenv/config";
import cors from "cors";
import * as db from "./db/dbgeral.js";
import chalk from "chalk";


const loginroutes = express();

loginroutes.use(express.json());
loginroutes.use(express.urlencoded({  extended: true  }));
loginroutes.use(cors({
  origin: "http://localhost:5174",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));


loginroutes.post("/login", async(req,res)=>{
    const requisicao = req.body
   
    const user = requisicao.user;
    const senha = requisicao.senha;
    const {status,data} = await db.buscarusuario(user,senha)

    console.log(`status: ${JSON.stringify(status)} e mensagem: ${data.message}`);
    
    res.status(status).json(data)

})
    


export default loginroutes