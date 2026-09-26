if (!localStorage.getItem("usuarios")) {
    localStorage.setItem("usuarios", JSON.stringify([
        {
            nome: "Administrador",
            email: "admin@email.com",
            senha: "admin123",
            dataNascimento: "2000-01-01",
            telefone: "",
            perfil: "admin",
            icone: "/img/treinador-icone.png"
        }
    ]));
}

const usuarios = JSON.parse(localStorage.getItem("usuarios"));

const formulario = document.getElementById("formulario");
formulario.addEventListener("submit", (event)=>{
    event.preventDefault();

    const dados = new FormData(formulario);
    console.log("E-mail digitado:", dados.get("email"));
    console.log("Senha digitada:", dados.get("senha"));
    console.log("Usuários:", usuarios);
    try{
        const usuario = usuarios.find(usuario => 
            usuario.email === dados.get("email") &&
            usuario.senha === dados.get("senha")
        );

        if(!usuario){
            throw new Error("E-mail não encontrado, verifique as credenciais ou registre-se");
        }

        //Salva o usuário atual no localStorage
        localStorage.setItem("usuarioLogado", JSON.stringify(usuario));


        if(usuario.perfil === "cliente"){
            window.location.href = "perfil.html";
            return;
        }
        window.location.href = "cartas.html";
    }
    catch(erro){
        alert(erro.message);
    };

});