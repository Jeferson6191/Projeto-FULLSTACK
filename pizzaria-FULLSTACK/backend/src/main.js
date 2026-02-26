import express from "express"
import rotas from "./rotas.js";


const app = express();
app.use(rotas);
const PORT = process.env.PORT;



app.listen(PORT, () =>{
    console.log(`porta aberta ${PORT}`)
})