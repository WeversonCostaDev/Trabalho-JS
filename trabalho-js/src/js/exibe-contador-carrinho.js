let carrinhoContador = Number(localStorage.getItem("carrinhoContador"));

export function exibirContadorCarrinho(){
    const divContador = document.getElementById("contador");
    divContador.textContent = carrinhoContador;
}
