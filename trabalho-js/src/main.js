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