
import express from "express";
import "dotenv/config";
import cors from "cors";
import * as db from "./db/dbvalidacaodeuser.js";
import chalk from "chalk";


const validationuser = express();

validationuser.use(express.json());
validationuser.use(express.urlencoded({  extended: true  }));
validationuser.use(cors({
  origin: "http://localhost:5174",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));


validationuser.post("/validationuser", async(req,res)=>{
    console.log("rota /validationuser acessada");
    
    // const { user } = req.body
    // console.log(user);
    
    // db.validacaodeusuario(user)
})
    


export default validationuser