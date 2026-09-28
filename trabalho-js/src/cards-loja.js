const areaCards = document.querySelector("#area-cards");

const pokemons = JSON.parse(localStorage.getItem("pokemons")) || [];

function exibirCards(pokemonsLista) {
    areaCards.innerHTML = "";
    pokemonsLista.forEach(pokemon => {
        const card = document.createElement("div");
        card.classList.add("card");

        //adiciona o id ao div card como data-id="numero" 
        // para pegar essa info em outra funcao
        card.dataset.id = pokemon.id;

        card.innerHTML = `
        <img src=${pokemon.imagem} alt="${pokemon.nome}">
        <div class="informacoes-card">
            <h3>${pokemon.nome}</h3>
            <p>R$ ${Number(pokemon.preco).toFixed(2)}</p>
            
            <div class="controles-quantidade">
                <button class="diminuir">-</button>
                <span class="quantidade">1</span>
                <button class="adicionar">+</button>
            </div>
            <button class="adicionar-carrinho">
                Adicionar ao carrinho
            </button>
        </div>
        `;
        controleDeQuantidade(card, pokemon);
        areaCards.appendChild(card);

    });
};

function controleDeQuantidade(card, pokemon) {
    let quantidade = 1;
    const botaoDiminuir = card.querySelector(".diminuir");
    const botaoAdicionar = card.querySelector(".adicionar");
    const spanQuantidade = card.querySelector(".quantidade");
    botaoDiminuir.addEventListener("click", () => {
        if (quantidade > 1) {
            quantidade--;
            spanQuantidade.textContent = quantidade;
        }
    });
    botaoAdicionar.addEventListener("click", () => {
        if (pokemon.quantidade > quantidade) {
            quantidade++;
            spanQuantidade.textContent = quantidade;
        }
    });
}


const botoes = document.querySelectorAll("#container-cards button");

//Adiciona a cada botao de tipo o evento de click
//Chama a funcao getTipo que retorna todos os cards daquele tipo de valor do botão
//Por fim insere os cards retornados na funcao de exibir cards
botoes.forEach(botao => botao.addEventListener("click", () => {

    const pokemonsLista = getTipo(botao.value);
    exibirCards(pokemonsLista);
}));

//Pega o card pokemon de acordo como tipo
function getTipo(tipo) {
    return pokemons.filter(pokemon => pokemon.tipo === tipo);
}

exibirCards(pokemons);