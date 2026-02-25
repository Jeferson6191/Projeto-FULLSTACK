import React, { useState } from 'react'
import '../style/login.css'
import * as auth from '../services/auth.js'
import ('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

const Logar = () => {
    
    
    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")
    async function uservalue() {
        console.log("enviando requisiçãos");
        const res = await auth.validandousuario(username,password)
        console.log(`resposta do backend ${JSON.stringify(res.body)}`);
        

    }

    return(
       
            <div className='main-login'>
                <div className="card-login">
            <h1>Login</h1>
            
            <div className="input-box">
            <input  
            value={username}
            onChange={e => setusername(e.target.value)}
            type="text" placeholder="Digite seu usuario" required/>
            <i className="bx bx-user" style={{color:'#2E7D32'}} />
            </div>

            <div className="input-box">
            <input 
            value={password}
            onChange={e => setpassword(e.target.value)}
            type="password" placeholder="Digite sua senha" required/>
             <i className="bx bx-lock" style={{color:'#2E7D32'}} />
            </div>

            <button className='btn' onClick={uservalue}>Entrar</button>

        </div>
        </div>
        
    )
}

export default Logar