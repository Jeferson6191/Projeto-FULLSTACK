
import express from "express";
import "dotenv/config";
import cors from "cors";
import * as db from "./db/dbvalidacaodeuser.js";
import chalk from "chalk";
import jwt from "jsonwebtoken"

const validationuser = express();

validationuser.use(express.json());
validationuser.use(express.urlencoded({  extended: true  }));
validationuser.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

// preparando middleware para autenticação
const autenticationToken = (req,res,next)=>{
  const token = req.headers["authorization"]
  if (!token) return res.status(403).json({"success":false,"message":"token não fornecido"})

  jwt.verify(token,process.env.CRIPTSECRETKEY, (err,user)=>{
    req.user = user
    if (err)return res.status(403).json({"success":false,"message":"token inválido"})

    console.log("token aceito");
    next()
  })


}
validationuser.get("/validationuser",autenticationToken, async(req,res)=>{
  console.log("rota /validationuser acessada");
  console.log(req.user);
  
  
  res.status(200).json({"success":true,"message":req.user})
})
    

validationuser.get("/Admin",autenticationToken, async(req,res)=>{
  console.log("rota /Admin acessada");
  console.log(req.user);
  
  
  res.status(200).json({"success":true,"message":req.user})
})
    
export default validationuser