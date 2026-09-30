const itensCarrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
const areaCards = document.getElementById("area-cards");
const valorTotal = document.querySelector("#infos-container>p");

import { atualizarContadorCarrinho } from "./atualizaCarrinho";

function exibirItens(){
    if(itensCarrinho.length === 0){
        //Carrinho vazio;
        return;
    }

    let total = 0;
 
    itensCarrinho
    .forEach( item => {
        exibirItem(item)

        total += (item.preco * item.quantidade);
    });

    valorTotal.textContent = `Valor total R$: ${total.toFixed(2)}`;
}
function exibirItem(item){
    const card = document.createElement("div");
    card.classList.add("card");
    
    card.innerHTML = 
    `
        <img src="${item.imagem}" alt="${item.nome}">
        <div class="informacoes-cards">
            <h3>${item.nome}</h3>
            <p>Unidade R$: ${(item.preco).toFixed(2)}</p>
            <p>Quantidade: ${item.quantidade}</p>
            <p>Subtotal: ${(item.preco*item.quantidade).toFixed(2)}</p>
        </div>
        <div class="lixeira">
            <button>
                <img src="/img/lixeira.png">
            </button>
        </div>
    `;
    botaoLixeira(card, item)
    areaCards.appendChild(card);
}

function botaoLixeira(card, pokemon){
    const botao = card.querySelector("div.lixeira button");

    botao.addEventListener("click", ()=>{

        const novaLista = itensCarrinho.filter(
            pokemonLista => pokemonLista.id != pokemon.id
        );

        localStorage.setItem(
            "carrinho",
            JSON.stringify(novaLista)
        );

        location.reload();
    }); 
   
}


exibirItens();
atualizarContadorCarrinho();