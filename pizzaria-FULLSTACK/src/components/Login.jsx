import React, { useState } from 'react'
import '../style/login.css'
import * as auth from '../services/auth.js'
import ('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

const Login = () => {
    


    
    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")
    async function uservalue() {
        console.log("enviando requisiçãos");
        const res = await auth.validandousuario_login(username,password)
        console.log(`resposta do backend ${JSON.stringify(res.body)}`);
        alert(res)
        
    }

    return(
       
            <div className='main-login'>
                <div className="card-login">
            <h1>Registrar</h1>
            
            <div className="input-box">
            <input  
            value={username}
            onChange={e => setusername(e.target.value)}
            type="text" placeholder="Digite seu usuario" required/>
            <i className="bx bx-user" style={{color:'#ffffff'}} />
            </div>

            <div className="input-box">
            <input 
            value={password}
            onChange={e => setpassword(e.target.value)}
            type="password" placeholder="Digite sua senha" required/>
             <i className="bx bx-lock" style={{color:'#ffffff'}} />
            </div>

            <button onClick={uservalue}>Entrar</button>

            <p>Já tem login?<a href="">Logar</a></p>
        </div>
        </div>
        
    )
}

export default Login