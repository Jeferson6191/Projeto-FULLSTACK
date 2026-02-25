import React, { useState } from 'react'
import '../style/login.css'
import * as auth from '../services/auth.js'
const Login = () => {
    
    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")
    async function uservalue() {
        console.log("enviando requisição");
        const res = await auth.validandousuario(username,password)
        console.log(`resposta do backend ${JSON.stringify(res.body)}`);
        

    }

    return(
        <div className='card-login'>
            <h1>Login</h1>
            <label>Username:</label>

            <input 
            value={username}
            onChange={e => setusername(e.target.value)}
            type="text" placeholder="Digite seu usuario"/>

            <label>Senha:</label>

            <input 
            value={password}
            onChange={e => setpassword(e.target.value)}
            type="password" placeholder="Digite sua senha" />

            <button onClick={uservalue}>Entrar</button>
            <p>Não tem cadastro?<a href="">Cadastre-se</a></p>
        </div>
    )
}

export default Login