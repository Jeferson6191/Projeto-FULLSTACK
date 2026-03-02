import express from "express"
import registerroutes from "./register.js";
import loginroutes from "./login.js"
import validationuser from "./validationuser.js"
const app = express();
app.use(registerroutes);
app.use(loginroutes);
app.use(validationuser);
const PORT = process.env.PORT;



app.listen(PORT, () =>{
    console.log(`porta aberta ${PORT}`)
})