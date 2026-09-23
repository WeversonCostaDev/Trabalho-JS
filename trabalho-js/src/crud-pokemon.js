const pokemons = [
    {   
        nome : "Pikachu ex",
        tipo : "Élétrico",
        quantidade: 25,
        raridade: "Ultra rara",
        imagem: null,
    },
];

//CREATE
function adicionarPokemon(pokemon){
    pokemons.push(pokemon);
}

const formulario = document.querySelector("#formulario");

formulario.addEventListener("submit", (event) =>{
    event.preventDefault(); // evitar o comportamento padrão de recarregar a página.

    const dados = new FormData(formulario);
    const pokemon = {
        nome : dados.get("nome"),
        tipo : dados.get("tipo"),
        quantidade : Number(dados.get("quantidade")),
        raridade : dados.get("raridade"),
        imagem : dados.get("imagem")
    };
    adicionarPokemon(pokemon);
    console.log("lista:", pokemons);
});


function getTipo(tipo){
    const pokemon = pokemons.filter(pokemon => pokemons.tipo === tipo);
    return pokemon;
}