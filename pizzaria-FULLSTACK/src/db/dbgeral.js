import "dotenv/config";
// importando pool
import { Pool } from "pg";
import chalk from "chalk";
// importando ferramenta de hash
import bcrypt from "bcrypt";


const pool = new Pool({
    connectionString : process.env.CONNECTION_STRING
})

export async function query(text, params) {
    return pool.query(text, params);
}

