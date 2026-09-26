const usuarios = JSON.parse(localStorage.getItem("usuarios"));

//Pega usuário logado.
const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));

import { lerImagem } from "./adiciona-card";

const inputArquivo = document.getElementById("icone");

inputArquivo.addEventListener("change", async () => {
    let imagem = inputArquivo.files[0];
    imagem = await lerImagem(imagem);    
    
    atualizaIcone(imagem);
})

function atualizaIcone(imagem){

    //Encontra o usuário que é o mesmo do usuário logado.
    const usuarioLista = usuarios.find(usuario => usuario.email === usuarioLogado.email);
    
    //Muda icone do usuário da lista
    usuarioLista.imagem = imagem;

    //Muda icone do uduário logado
    usuarioLogado.imagem = imagem;

    //Atualiza a lista de usuários logados
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    
    //Atualiza também o usuário que está logadoç
    localStorage.setItem("usuarioLogado", JSON.stringify(usuarioLogado));
}

const imagem = document.querySelector("#icone-container img");

function carregarIcone(){
    if(usuarioLogado.imagem){
        imagem.setAttribute("src", usuarioLogado.imagem);
    }
}
carregarIcone();