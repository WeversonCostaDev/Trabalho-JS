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

card.addEventListener("mouseleave", () =>{
    card.style.boxShadow = "none";
    card.style.transform = `rotateX(${0}deg) rotateY(${0}deg)`;
     brilho.style.opacity = "0";
})

//carrossel

const botaoDireito= document.getElementById("proximo");
const botaoEsquerdo= document.getElementById("anterior");
const cards = [
    "/img/pikachu.png",
    "/img/mewtwo.png",
    "/img/mew.png",

];

const carta = document.querySelector(".card");
const imagem = document.querySelector(".card img");

let indice = 0;

botaoDireito.addEventListener("click", () => {
    indice++;
    if(indice >= cards.length){
        indice = 0;
    }
    imagem.setAttribute("src",cards[indice]);
});

botaoEsquerdo.addEventListener("click", () =>{
    indice --;
    if(indice<=0){
        indice = cards.length - 1;
    }
    imagem.setAttribute("src", cards[indice]);
})
