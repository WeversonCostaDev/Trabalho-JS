export function atualizarContadorCarrinho() {
    const divContador = document.getElementById("contador");

    const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

    const total = carrinho.reduce(
        (total, item) => total + item.quantidade,
        0
    );

    divContador.textContent = total;
}