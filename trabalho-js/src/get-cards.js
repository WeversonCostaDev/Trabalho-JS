
//Adiciona pokemons no localstorage
if(!localStorage.getItem("pokemons")){localStorage.setItem("pokemons", JSON.stringify([
    {
        id: 1,
        nome: "Chikorita",
        tipo: "planta",
        quantidade: 1,
        raridade: "raro",
        imagem: "/img/cards/chikorita-fullart.png"
    },
    {
        id: 2,
        nome: "Boubasaur",
        tipo: "planta",
        quantidade: 1,
        raridade: "raro",
        imagem: "/img/cards/bulbasaur-fullart.png"
    },
    {
        id: 3,
        nome: "Turtwig",
        tipo: "planta",
        quantidade: 1,
        raridade: "raro",
        imagem: "/img/cards/turtwig-fullart.png"
    },
    {
        id: 4,
        nome: "Laefeon gx",
        tipo: "planta",
        quantidade: 1,
        raridade: "raro",
        imagem: "/img/cards/leafeon-gx-fullart.png"
    },
    {
        id: 5,
        nome: "Charmander",
        tipo: "fogo",
        quantidade: 1,
        raridade: "raro",
        imagem: "/img/cards/charmander-fullart.png"
    },
    {
        id: 6,
        nome: "Fennekin",
        tipo: "fogo",
        quantidade: 1,
        raridade: "raro",
        imagem: "/img/cards/fennekin-fullart.png"
    },
    {
        id: 7,
        nome: "Mega Charizard ex",
        tipo: "fogo",
        quantidade: 1,
        raridade: "raro",
        imagem: "/img/cards/mega-charizard-ex-fullart.png"
    },
    {
        id: 8,
        nome: "Piplup",
        tipo: "agua",
        quantidade: 1,
        raridade: "raro",
        imagem: "/img/cards/piplup-fullart.png"
    },
    {
        id: 9,
        nome: "Sobble",
        tipo: "agua",
        quantidade: 1,
        raridade: "raro",
        imagem: "/img/cards/sobble-fullart.png"
    },
    {
        id: 10,
        nome: "Squirtle",
        tipo: "agua",
        quantidade: 1,
        raridade: "raro",
        imagem: "/img/cards/squirtle-fullart.png"
    },
    {
        id: 11,
        nome: "Totodile",
        tipo: "agua",
        quantidade: 1,
        raridade: "raro",
        imagem: "/img/cards/totodile-fullart.png"
    },
    {
        id: 12,
        nome: "Pikachu",
        tipo: "eletrico",
        quantidade: 1,
        raridade: "raro",
        imagem: "/img/cards/pikachu-fullart.png"
    },
    {
        id: 13,
        nome: "pachirisu",
        tipo: "eletrico",
        quantidade: 1,
        raridade: "raro",
        imagem: "/img/cards/pachirisu-fullart.png"
    },
    {
        id: 14,
        nome: "Miraidon ex",
        tipo: "eletrico",
        quantidade: 1,
        raridade: "ultra-raro",
        imagem: "/img/cards/miraidon-ex-ultrarara.png"
    },
]));
}

//pega lista de cards pokemons do localStorage e converte para objeto js
const pokemons = JSON.parse(localStorage.getItem("pokemons")) || [];
const areaCards = document.getElementById("area-cards");

exibirCards(pokemons);

//Adiciona a cada botao de tipo o evento de click
//Chama a funcao getTipo que retorna todos os cards daquele tipo de valor do botão
//Por fim insere os cards retornados na funcao de exibir cards
const botoes = document.querySelectorAll("#container-cards button");
botoes.forEach(botao => botao.addEventListener("click", ()=>{

    const pokemonsLista = getTipo(botao.value);
    exibirCards(pokemonsLista);
}));

//Pega o card pokemon de acordo como tipo
function getTipo(tipo){
    return pokemons.filter(pokemon => pokemon.tipo === tipo);
}

function exibirCards(pokemonsLista){
    areaCards.innerHTML="";
    pokemonsLista.forEach(pokemon => {
        const card = document.createElement("div");
        card.classList.add("card");

        //adiciona o id ao div card como data-id="numero" 
        // para pegar essa info em outra funcao
        card.dataset.id = pokemon.id;

        card.innerHTML = `
        <img src=${pokemon.imagem} alt="${pokemon.nome}">
        <div class="acoes-card">
            <button class="editar">Editar</button>
            <button class="excluir">Excluir</button>
        </div>
        `;
        
        aplicarEfeito(card);
        areaCards.appendChild(card);

    });
};

function aplicarEfeito(card) {

    card.addEventListener("mousemove", (event) => {

        const cardPosition = card.getBoundingClientRect();

        const xViewpoint = event.clientX;
        const yViewpoint = event.clientY;

        const xInside = xViewpoint - cardPosition.left;
        const yInside = yViewpoint - cardPosition.top;

        const xCenter = cardPosition.width / 2;
        const yCenter = cardPosition.height / 2;

        const xSide = -((xInside - xCenter) / xCenter) * 10;
        const ySide = ((yInside - yCenter) / yCenter) * 10;

        card.style.boxShadow = "10px 10px 20px rgba(0, 0, 0, 0.3)";
        card.style.transform = `
            scale(1.05)
            rotateX(${ySide}deg)
            rotateY(${xSide}deg)
        `;

        card.style.setProperty("--x", `${xInside}px`);
        card.style.setProperty("--y", `${yInside}px`);
        card.style.setProperty("--brilho", "1");

    });

    card.addEventListener("mouseleave", () => {

        card.style.boxShadow = "none";
        card.style.transform = `
            rotateX(0deg)
            rotateY(0deg)
        `;
        card.style.setProperty("--brilho", "0");
    });

    card.addEventListener("click", ()=>{
        card.classList.toggle("selecionado");
    });

    const botaoEditar = card.querySelector(".editar");
    const botaoExcluir = card.querySelector(".excluir");

    botaoEditar.addEventListener("click", (event) =>{
        event.stopPropagation(); //Vai evitar que o evento de click atinja o elementos de camadas abaixo, como o card.
        const id = Number(card.dataset.id);
        
        localStorage.setItem("idPokemonEditando", id);

        //Redireciona o usuário para essa página.
        window.location.href = "adiciona-card.html";
    });

        botaoExcluir.addEventListener("click", (event) => {
            event.stopPropagation();
            const id = Number(card.dataset.id);
            const novaLista = pokemons.filter(pokemon => pokemon.id != id);

            localStorage.setItem("pokemons", JSON.stringify(novaLista));
            window.location.reload();
        });
}


const form = document.getElementById("barra-pesquisa");
form.addEventListener("submit", async(event)=>{
    event.preventDefault();
    const dados = new FormData(form);
    const lista = await getPokemonsPorNome(dados.get("nome"));
    exibirCards(lista);
});

//Pega um card pelo nome
function getPokemonsPorNome(nome){
    const cards = JSON.parse(localStorage.getItem("pokemons")) || [];
    const card = cards.filter(card => card.nome.toLowerCase() === nome.toLowerCase())
    return card;
}
