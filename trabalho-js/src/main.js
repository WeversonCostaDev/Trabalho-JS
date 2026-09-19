const card = document.querySelector(".card");

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

})

card.addEventListener("mouseleave", () =>{
    card.style.boxShadow = "none";
    card.style.transform = `rotateX(${0}deg) rotateY(${0}deg)`;
})

//carrossel

const botao= document.getElementById("proximo");

const cards = [
    {
        imagem: "/img/pikachu.png",
        efeito: "pikachu",
    },
    {    
        imagem: "/img/mewtwo.png",
        efeito: "mewtwo",
    },
    {
        imagem: "/img/mew.png",
        efeito: "mew",
    }
];

const carta = document.querySelector(".card");
const imagem = document.querySelector(".card img");

let indice = 0;

botao.addEventListener("click", () => {
    indice++;
    if(indice >= cards.length){
        indice = 0;
    }
    imagem.setAttribute("src",cards[indice].imagem);
    carta.className = "card "+cards[indice].efeito;

});