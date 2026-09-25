const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

const formulario = document.getElementById("formulario");
formulario.addEventListener("submit", (event)=>{
    const dados = new FormData(formulario);
    try{
        if(usuarios.some(usuario => usuario.email === dados.get("email"))){
            throw new Error("Este e-mail já foi cadastrado");
        };
    }
    catch (erro){
        alert(erro.message)
    }        
    cadastro(dados);
});

function cadastro(dados){
    const usuario = {
        nome: dados.get("nome").trim(),
        email: dados.get("email").trim(),
        dataNascimento: dados.get("data-nascimento"),
        telefone: dados.get("telefone"),
    }
    usuarios.push(usuario);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
}