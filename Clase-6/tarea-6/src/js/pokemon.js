console.log('Estamos al aire!')

document.addEventListener("DOMContentLoaded", () => {

    let generateBtn = document.querySelector('#random-pokemon');
    generateBtn.addEventListener('click', renderEverything)
})

function renderEverything() {
    let allPokemonContainer = document.querySelector('#poke-container')
    allPokemonContainer.innerText = "";
    searchPokemones();
}

const pokeUrl = 'https://pokeapi.co/api/v2/pokemon/';

const searchPokemones = (pokemones = pokemones_ids()) => {
    pokemones.forEach(pokemon => {
        fetch(`${pokeUrl}${pokemon}`)
            .then(response => response.json())
            .then(data => renderPokemon(data))
            .catch(err => renderNotFound())
    });
}

function renderPokemon(pokeData) {
    let allPokemonContainer = document.getElementById('poke-container');
    let pokeContainer = document.createElement("div")
    pokeContainer.classList.add('ui', 'card');

    createPokeImage(pokeData.sprites.front_default, pokeContainer);

    let pokeName = document.createElement('h4')
    pokeName.innerText = pokeData.name

    let pokeNumber = document.createElement('p')
    pokeNumber.innerText = `#${pokeData.id}`

    pokeContainer.append(pokeName, pokeNumber);
    allPokemonContainer.appendChild(pokeContainer);
}

function createPokeImage(sprite, containerDiv) {
    let pokeImgContainer = document.createElement('div')
    pokeImgContainer.classList.add('image')

    let pokeImage = document.createElement('img')
    pokeImage.srcset = sprite

    pokeImgContainer.append(pokeImage);
    containerDiv.append(pokeImgContainer);
}

const pokemones_ids = () => {
    const ids = [];
    for (let i = 1; i <= 20; i++) {
        ids.push(random())
    }
    return ids
}

const random = (low = 1, high = 898) => Math.floor(Math.random() * (1 - low + high)) + low;

const renderNotFound = () => {
    let allPokemonContainer = document.getElementById('poke-container');
    let pokeContainer = document.createElement("div")
    pokeContainer.classList.add('ui', 'card');

    createPokeImage('not_found.png', pokeContainer);

    let pokeName = document.createElement('h4')
    pokeName.innerText = 'No encontrado';

    let pokeNumber = document.createElement('p')
    pokeNumber.innerText = "1000"

    pokeContainer.append(pokeName, pokeNumber);
    allPokemonContainer.appendChild(pokeContainer);
}
