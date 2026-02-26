import { createClient } from "@supabase/supabase-js";
import "dotenv/config"
import "chalk"
import chalk from "chalk";
import bcrypt from "bcrypt";
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);



export async function criarperfil(user,senha){
    const genSaltSync = await bcrypt.genSaltSync(10)
    const senhacript = await bcrypt.hash(senha,genSaltSync)
    

    const { data, error } = await supabase
    .from('userstoconsult')
    .insert([{
        username: user,
        password: senhacript
    }])
    // tratando error
    if (error) {
        console.log(chalk.redBright(error.message));
        
        if (String(error.message) == `duplicate key value violates unique constraint "Users_username_key"` ) {
            console.log(chalk.blueBright("O nome já esta sendo ultilizado por outro usuario"));
            
            return {status:409,
                data:{
                succcess: false,
                message:"O nome já esta sendo ultilizado por outro usuario"}}
        }
        return {status:404,
            data:{
            succcess: false,
            message:"Ocorreu um erro inesperado"}}
                
    }
    // tratando sucecessos
    return {status:200,
        data:{
            succcess:true,
            message:"usuario cadastrado com sucesso"
        }
    }

}

export async function buscarusuario(user, senha) {
    try {
        
    
    const { data, error } = await supabase
    .from("userstoconsult")
    .select("password, username")
    .eq("username", user)
    .single()


    const descriptografar = await bcrypt.compare(senha,data.password) 
    console.log(`descriptorgrafar = ${descriptografar}`);


    if (descriptografar == true) {
        return {status:200,data:{
        succcess:true,
        message:"Bem Vindo" 
    }};
    }else{
        return {status:404,data:{
        succcess:true,
        message:"Senha ou Username incorreto" 
    }};
    };
    } catch (error) {
    return{status:505,data:{
        succcess:true,
        message:"Senha ou Username incorreto"
    }}   
    }

    
}