import { createClient } from "@supabase/supabase-js";
import "dotenv/config"
import "chalk"
import chalk from "chalk";
import bcrypt from "bcrypt";
import { buffer } from "stream/consumers";
import jwt from "jsonwebtoken";


const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);

export async function validacaodeusuario(usuario){

    
}