const usuarioLogado = JSON.parse(sessionStorage.getItem("usuarioLogado"));

if(!usuarioLogado || !usuarioLogado.perfil === "admin"){
    alert("Você precisa estar logado em uma conta de admininstrador para ter acesso a essa página.");
    window.location.href="index.html";
}