const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

const formulario = document.getElementById("formulario");
formulario.addEventListener("submit", (event)=>{
    event.preventDefault();
    const dados = new FormData(formulario);
    const email = dados.get("email").trim();

    try{
        if(usuarios.some(usuario => usuario.email === email)){
            throw new Error("Este e-mail já foi cadastrado");
        };
    }
    catch (erro){
        alert(erro.message)
        return;
    }        
    cadastro(dados);
});

function cadastro(dados){
    const usuario = {
        id: Date.now(),
        nome: dados.get("nome").trim(),
        email: dados.get("email").trim(),
        senha: dados.get("senha"),
        dataNascimento: dados.get("data-nascimento"),
        telefone: dados.get("telefone"),
        perfil: "cliente",
        icone: "/img/treinador-icone.png"
    }
    usuarios.push(usuario);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
}

