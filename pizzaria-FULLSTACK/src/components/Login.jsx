import React from 'react'

const Login = () => {

    return(
        <div>
            <h1>Login</h1>
            <label>Username:</label>
            <input type="text"  placeholder="Digite seu usuario"/>
            <label>Senha:</label>
            <input type="password" placeholder="Digite sua senha" />
            <button>Entrar</button>
            <p>Não tem cadastro?<a href="">Sing up</a></p>
        </div>
    )
}

export default Login