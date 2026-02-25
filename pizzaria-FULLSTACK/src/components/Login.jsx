import React from 'react'

const Login = () => {
    

    return(
        <div className='card-login'>
            <h1>Login</h1>
            <label>Username:</label>
            <input type="text"  placeholder="Digite seu usuario"/>
            <label>Senha:</label>
            <input type="password" placeholder="Digite sua senha" />
            <button>Entrar</button>
            <p>Não tem cadastro?<a href="">Cadastre-se</a></p>
        </div>
    )
}

export default Login