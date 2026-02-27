import { createClient } from "@supabase/supabase-js";
import "dotenv/config"
import "chalk"
import chalk from "chalk";
import bcrypt from "bcrypt";
import cryptoJS from "crypto-js"
import { buffer } from "stream/consumers";



const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);

export async function validacaodeusuario(usuario){
    // preparando criptografia
    supabase
    const secretkey = process.env.CRIPTSECRETKEY
    const concatenado = `${usuario}data:${Date.now()}`
    console.log(concatenado);
    


    console.log(await String(cryptoJS.AES.encrypt(usuario,secretkey)));
    
}