const pokemons = JSON.parse(localStorage.getItem("pokemons")) || [];
const idPokemonEditando = localStorage.getItem("idPokemonEditando");

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

//Preenche os dados no formulário
if(idPokemonEditando){
    const pokemon = procuraPokemonId(idPokemonEditando);
    document.getElementById("nome").value = pokemon.nome;
    document.getElementById("tipo").value = pokemon.tipo;
    document.getElementById("quantidade").value = pokemon.quantidade;
    document.getElementById("raridade").value = pokemon.raridade;
    }

formulario.addEventListener("submit", async (event) =>{
    event.preventDefault(); // evitar o comportamento padrão de recarregar a página.

    const dados = new FormData(formulario);

    if (idPokemonEditando) {

        const pokemon = procuraPokemonId(idPokemonEditando);

        pokemon.nome = dados.get("nome").trim();
        pokemon.tipo = dados.get("tipo");
        pokemon.quantidade = Number(dados.get("quantidade"));
        pokemon.raridade = dados.get("raridade");

        const arquivo = dados.get("imagem");

        // Se escolheu uma nova imagem
        if (arquivo && arquivo.size > 0) {
            pokemon.imagem = await lerImagem(arquivo);
        }
    }
    else{
        const pokemon = 
        {
        id : Date.now(),
        nome : dados.get("nome").trim(),
        tipo : dados.get("tipo"),
        quantidade : Number(dados.get("quantidade")),
        raridade : dados.get("raridade"),
        imagem : await lerImagem(dados.get("imagem")),
        };
        adicionarPokemon(pokemon);
        console.log("lista:", pokemons);
    }
    localStorage.setItem("pokemons", JSON.stringify(pokemons));
    localStorage.removeItem("idPokemonEditando");
    window.location.href = "cartas.html";
});

function procuraPokemonId(id){
    const pokemon = pokemons.find(pokemon => pokemon.id == Number(id));
    return pokemon;
}


