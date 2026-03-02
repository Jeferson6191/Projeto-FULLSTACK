
// ------------------------------  ::: Post responsavel pelo o registro do usuario :::
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




// ------------------------------  ::: Post responsavel pelo login do usuario  :::
export async function validandousuario_login(user,senha) {        
    const login = await fetch("http://localhost:3000/login",{
        method: "POST",
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({user,senha})
    })
    let resposta = await login.json();
    console.log(resposta.message);
    
    if (login.ok) {
        console.log("requisição ok");

        const token = resposta.message

        localStorage.setItem("usertoken",JSON.stringify(token).replaceAll(`"`,""))

        return resposta.message
    }
    else{
        throw new Error(resposta.message);
        
    }
}





// ------------------------------  ::: get responsavel pela validação de token do usuario :::
export async function validationuser() {
    const token = localStorage.getItem("usertoken")
    console.log(token);
    
    const validar = await fetch("http://localhost:3000/validationuser",{
        method: "GET",
        headers:{
            'Content-Type': 'application/json',
            'authorization': token
        }
    })
    let resposta = await validar.json() 
    if (validar.ok) {
        // pegando token do local storage
        
        console.log("token = "+token);
        console.log("resposta= "+JSON.stringify(resposta.message));
        
        return resposta.message
    }else{
        return resposta.message
    }
}