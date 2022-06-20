const pokeName = document.querySelector('[data-poke-name]');
const pokeImg = document.querySelector('[data-poke-img]');

const pokeUrl = 'https://pokeapi.co/api/v2/pokemon/';

const searchPokemones = (pokemones = pokemones_ids()) => {
    pokemones.forEach(pokemon => {
        fetch(`${pokeUrl}${pokemon}`)
            .then(response => response.json())
            .then(data => renderPokemonData(data))
            .catch(err => renderNotFound())
    });
}

const renderPokemonData = data => {
    const sprite = data.sprites.front_default;
    pokeName.textContent = data.name;
    pokeImg.setAttribute('src', sprite);
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
    pokeName.textContent = 'No encontrado';
    pokeImg.setAttribute('src', 'not_found.png');
}
