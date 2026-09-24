const pokemons = [];

function lerImagem(arquivo) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = () => resolve(reader.result);
        reader.onerror = () => reject(reader.error);

        reader.readAsDataURL(arquivo);
    });
}

//CREATE
function adicionarPokemon(pokemon){
    pokemons.push(pokemon);

    localStorage.setItem("pokemons", JSON.stringify(pokemons));
}

const formulario = document.querySelector("#formulario");

formulario.addEventListener("submit", async (event) =>{
    event.preventDefault(); // evitar o comportamento padrão de recarregar a página.

    const dados = new FormData(formulario);
    const imagem = await lerImagem(dados.get("imagem"));

    const pokemon = {
        nome : dados.get("nome"),
        tipo : dados.get("tipo"),
        quantidade : Number(dados.get("quantidade")),
        raridade : dados.get("raridade"),
        imagem : imagem,
    };
    adicionarPokemon(pokemon);
    console.log("lista:", pokemons);
});

