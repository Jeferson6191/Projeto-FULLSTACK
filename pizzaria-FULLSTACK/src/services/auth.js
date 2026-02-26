
// fazendo post de teste para o backend
export async function validandousuario_register(user,senha) {
    try {
        
    
    const register = await fetch("http://localhost:3000/register",{
        method: "POST",
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({user,senha})
    })
    let resposta = await register.json();

    console.log(resposta.message);
    
    return resposta.message
    } catch (error) {
        return "Erro na requisição"
    }
}




// fazendo post de teste para o backend
export async function validandousuario_login(user,senha) {
    try {
        
    
    const login = await fetch("http://localhost:3000/login",{
        method: "POST",
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({user,senha})
    })
    let resposta = await login.json();

    console.log(resposta.message);
    
    return resposta.message
    } catch (error) {
        return "Erro na requisição"
    }
}