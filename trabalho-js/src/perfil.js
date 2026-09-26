const usuarios = JSON.parse(localStorage.getItem("usuarios"));

//Pega usuário logado.
const usuarioLogado = JSON.parse(sessionStorage.getItem("usuarioLogado"));

import { lerImagem } from "./lerImagem";

const inputArquivo = document.getElementById("icone");

inputArquivo.addEventListener("change", async () => {
    let imagem = inputArquivo.files[0];
    imagem = await lerImagem(imagem);    
    atualizaIcone(imagem);
})

function adicionaNomeTreinador(){
    const nome = document.getElementById("nome-treinador");
    nome.textContent = usuarioLogado.nome;
}

function atualizaIcone(imagem){

    //Encontra o usuário que é o mesmo do usuário logado.
    const usuarioLista = usuarios.find(usuario => usuario.id === usuarioLogado.id);
    
    //Muda icone do usuário da lista
    usuarioLista.imagem = imagem;

    //Muda icone do uduário logado
    usuarioLogado.imagem = imagem;

    //Atualiza a lista de usuários logados
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    
    //Atualiza também o usuário que está logadoç
    sessionStorage.setItem("usuarioLogado", JSON.stringify(usuarioLogado));
    
    window.location.reload();
}

function carregarIcone(){
    const imagem = document.querySelector("#icone-container img");  
    if(usuarioLogado.imagem){
        imagem.setAttribute("src", usuarioLogado.imagem);
    }
}

const editar  = document.getElementById("editar-perfil");
editar.addEventListener("click", () => {
    const editarContainer = document.getElementById("editar-container");
    editarContainer.hidden = false;
});

const formularioEdicaoPerfil = document.querySelector("#editar-container>form");

formularioEdicaoPerfil.addEventListener("submit", (event) =>{
    event.preventDefault();
    const dados = new FormData(formularioEdicaoPerfil);

    const dadosTratados = validaDadosEdicao(dados);
    atualizarPerfil(dadosTratados);
});

function validaDadosEdicao(dados){
    const usuarioLogado = JSON.parse(sessionStorage.getItem("usuarioLogado"));

    //dados.get vai retornar uma string vazia mesmo se não digitar nada
    //Se for vazio, conservo o valor original

    const nome = dados.get("nome") ? dados.get("nome") : usuarioLogado.nome;
    const email = dados.get("email") ? dados.get("email") : usuarioLogado.email;
    const telefone = dados.get("telefone") ? dados.get("telefone") : usuarioLogado.telefone;

    const dadosTratados = {
        nome: nome.trim(),
        email: email.trim(),
        telefone: telefone,
    }
    return dadosTratados;
}

function atualizarPerfil(dadosTratados){
    const usuarioLogado = JSON.parse(sessionStorage.getItem("usuarioLogado"));
    usuarioLogado.nome = dadosTratados.nome;
    usuarioLogado.email = dadosTratados.email;
    usuarioLogado.telefone = dadosTratados.telefone;

    const usuarios= JSON.parse(localStorage.getItem("usuarios"));
    const usuarioNaLista = usuarios.find(usuario => usuario.id === usuarioLogado.id);
    
    usuarioNaLista.nome = usuarioLogado.nome;
    usuarioNaLista.email = usuarioLogado.email;
    usuarioNaLista.telefone = usuarioLogado.telefone;
    
    sessionStorage.setItem("usuarioLogado", JSON.stringify(usuarioLogado));
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    window.location.reload();
}
carregarIcone();
adicionaNomeTreinador();