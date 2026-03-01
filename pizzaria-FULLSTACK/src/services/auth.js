
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
    const validar = await fetch("http://localhost:3000/validationuser",{
        method: "POST",
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({token})
    })
    if (validar.ok) {
        // pegando token do local storage
        
        console.log("token = "+token);
        
        let resposta = await validar.json();

        console.log(resposta.message);
        
        return resposta.message
    }else{

    }
}