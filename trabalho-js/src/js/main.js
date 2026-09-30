//Adiciona pokemons no localstorage
if (!localStorage.getItem("pokemons")) {
    localStorage.setItem("pokemons", JSON.stringify([
        {
            id: 1,
            nome: "Chikorita",
            tipo: "planta",
            preco: 1,
            quantidade: 5,
            raridade: "raro",
            imagem: "/img/cards/chikorita-fullart.png"
        },
        {
            id: 2,
            nome: "Boubasaur",
            tipo: "planta",
            preco: 1,
            quantidade: 5,
            raridade: "raro",
            imagem: "/img/cards/bulbasaur-fullart.png"
        },
        {
            id: 3,
            nome: "Turtwig",
            tipo: "planta",
            preco: 1,
            quantidade: 5,
            raridade: "raro",
            imagem: "/img/cards/turtwig-fullart.png"
        },
        {
            id: 4,
            nome: "Laefeon gx",
            tipo: "planta",
            preco: 1,
            quantidade: 5,
            raridade: "raro",
            imagem: "/img/cards/leafeon-gx-fullart.png"
        },
        {
            id: 5,
            nome: "Charmander",
            tipo: "fogo",
            preco: 1,
            quantidade: 5,
            raridade: "raro",
            imagem: "/img/cards/charmander-fullart.png"
        },
        {
            id: 6,
            nome: "Fennekin",
            tipo: "fogo",
            preco: 1,
            quantidade: 5,
            raridade: "raro",
            imagem: "/img/cards/fennekin-fullart.png"
        },
        {
            id: 7,
            nome: "Mega Charizard",
            tipo: "fogo",
            preco: 1,
            quantidade: 5,
            raridade: "raro",
            imagem: "/img/cards/mega-charizard-ex-fullart.png"
        },
        {
            id: 8,
            nome: "Piplup",
            tipo: "agua",
            preco: 1,
            quantidade: 5,
            raridade: "raro",
            imagem: "/img/cards/piplup-fullart.png"
        },
        {
            id: 9,
            nome: "Sobble",
            tipo: "agua",
            preco: 1,
            quantidade: 5,
            raridade: "raro",
            imagem: "/img/cards/sobble-fullart.png"
        },
        {
            id: 10,
            nome: "Squirtle",
            tipo: "agua",
            preco: 1,
            quantidade: 5,
            raridade: "raro",
            imagem: "/img/cards/squirtle-fullart.png"
        },
        {
            id: 11,
            nome: "Totodile",
            tipo: "agua",
            preco: 1,
            quantidade: 5,
            raridade: "raro",
            imagem: "/img/cards/totodile-fullart.png"
        },
        {
            id: 12,
            nome: "Pikachu",
            tipo: "eletrico",
            preco: 1,
            quantidade: 5,
            raridade: "raro",
            imagem: "/img/cards/pikachu-fullart.png"
        },
        {
            id: 13,
            nome: "pachirisu",
            tipo: "eletrico",
            preco: 1,
            quantidade: 5,
            raridade: "raro",
            imagem: "/img/cards/pachirisu-fullart.png"
        },
        {
            id: 14,
            nome: "Miraidon ex",
            tipo: "eletrico",
            preco: 1,
            quantidade: 5,
            raridade: "ultra-raro",
            imagem: "/img/cards/miraidon-ex-ultrarara.png"
        },
    ]));
}
import { exibirContadorCarrinho } from "./exibe-contador-carrinho";

const card = document.querySelector(".card");
const brilho = document.querySelector(".brilho");

card.addEventListener("mousemove", (event) => {
    const cardPosition = card.getBoundingClientRect();

    const xViewpoint = event.clientX;
    const yViewpoint = event.clientY;

    const xInside = xViewpoint - cardPosition.left;
    const yInside = yViewpoint - cardPosition.top;

    const xCenter = cardPosition.width / 2;
    const yCenter = cardPosition.height / 2;

    const xSide = - ((xInside - xCenter) / xCenter) * 10;
    const ySide = ((yInside - yCenter) / yCenter) * 10;

    card.style.boxShadow = "10px 10px 20px rgba(0, 0, 0, 0.3)";

    card.style.transform = `
    scale(1.05)
    rotateX(${ySide}deg)
    rotateY(${xSide}deg)`;

    brilho.style.opacity = "1";
    brilho.style.setProperty("--x", `${xInside}px`);
    brilho.style.setProperty("--y", `${yInside}px`);
    ;

})

card.addEventListener("mouseleave", () => {
    card.style.boxShadow = "none";
    card.style.transform = `rotateX(${0}deg) rotateY(${0}deg)`;
    brilho.style.opacity = "0";
})

//carrossel

const botaoDireito = document.getElementById("proximo");
const botaoEsquerdo = document.getElementById("anterior");
const cards = [
    {
        imagem: "/img/pikachu.png",
        titulo: "Pikachu ex",
    },
    {
        imagem: "/img/mewtwo.png",
        titulo: "Mewtwo ex",
    },
    {
        imagem: "/img/mew.png",
        titulo: "Mew ex",
    }
];

const carta = document.querySelector(".card");
const imagem = document.querySelector(".card img");
const titulo = document.querySelector("div.carrossel-container h3")
let indice = 0;

botaoDireito.addEventListener("click", () => {
    indice++;
    if (indice >= cards.length) {
        indice = 0;
    }
    imagem.setAttribute("src", cards[indice].imagem);
    titulo.textContent = cards[indice].titulo
});

botaoEsquerdo.addEventListener("click", () => {
    indice--;
    if (indice <= 0) {
        indice = cards.length - 1;
    }
    imagem.setAttribute("src", cards[indice].imagem);
    titulo.textContent = cards[indice].titulo
})

exibirContadorCarrinho();