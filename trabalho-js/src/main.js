const card = document.querySelector(".card");

card.addEventListener("mousemove", (event) =>{
    const rect = card.getBoundingClientRect();
    //serve para pegar informações sobre o tamanho e a posição do elemento card na tela.

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const centroX = rect.width/2;
    const centroY = rect.height/2;

    const distanciaX = x - centroX;
    const distanciaY = y - centroY;

    const rotateX = - (distanciaY / centroY) * 10;
    const rotateY = (distanciaX / centroX) * 10;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
});

card.addEventListener("mouseleave", (event)=>{
    card.style.transform = "rotateX(0deg) rotateY(0deg)";
})

//carrossel

const botao= document.getElementById("proximo");
const cards = [
    "/img/pikachu.png",
    "/img/mewtwo.png",
    "/img/mew.png",
];
let indice = 0;

botao.addEventListener("click", () => {
    indice++;
    if(indice >= cards.length){
        indice = 0;
    }
    const card2 = document.querySelector(".card");
    card2.setAttribute("src", cards[indice]);
});