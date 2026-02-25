
// fazendo post de teste para o backend
export async function validandousuario(user,senha) {

    const register = await fetch("http://localhost:3000/register",{
        method: "POST",
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({user,senha})
    })
    if (!register.ok){
        throw new Error("Erro na requisição");
        
    }
    return register
}