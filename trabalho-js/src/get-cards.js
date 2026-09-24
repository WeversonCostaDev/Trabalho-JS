//GET
const areaCards = document.getElementById("area-cards");

const pokemons = JSON.parse(localStorage.getItem("pokemons")) || [];


const botoes = document.querySelectorAll("#container-cards button");
botoes.forEach(botao => botao.addEventListener("click", ()=>{

    const pokemonsLista = getTipo(botao.value);
    exibirCards(pokemonsLista);
}));

function getTipo(tipo){
    return pokemons.filter(pokemon => pokemon.tipo === tipo);
} 

function exibirCards(pokemonsLista){
    areaCards.innerHTML="";
    pokemonsLista.forEach(pokemon => {
        const card = document.createElement("div");
        card.classList.add("card");
        aplicarEfeito(card);
        card.innerHTML = `<img src=${pokemon.imagem} alt="${pokemon.nome}">`;
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
}