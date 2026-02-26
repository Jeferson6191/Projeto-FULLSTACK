
// fazendo post de teste para o backend
export async function validandousuario_register(user,senha) {
    try {
        
    
    const register = await fetch("https://mowburnt-terrenely-susanna.ngrok-free.dev/register",{
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
        
    
    const login = await fetch("https://mowburnt-terrenely-susanna.ngrok-free.dev/login",{
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
        console.log(error);
        
        
        return "Erro na requisição"
        
        
    }
}