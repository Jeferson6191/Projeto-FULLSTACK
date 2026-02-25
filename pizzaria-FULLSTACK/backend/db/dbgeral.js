import { createClient } from "@supabase/supabase-js";
import "dotenv/config"

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);



export async function criarperfil(user,senha){

    try {
        
    
    const { data, error } = await supabase
    .from('Users')
    .insert([{
        username: user,
        password: senha
    }])
    console.log(error);
    
    } catch (e) {
        console.log(e);
        
    }

}