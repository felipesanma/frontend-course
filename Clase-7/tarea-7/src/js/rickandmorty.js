const url = "https://rickandmortyapi.com/api/character/";
class RickAndMorty {
    constructor() {
        this.characterUrl = url;
        this.id = undefined;
        this.name = undefined;
        this.species = undefined;
        this.image = undefined;
    };

    show() {
        const characters_urls = this.get_character_urls();
        characters_urls.forEach(character_url => {
            fetch(character_url)
                .then(response => response.json())
                .then(data => this.characterConstructor(data))
                .catch(err => console.log(err))
        });
    };

    characterConstructor(character_data) {
        this.id = character_data.id;
        this.name = character_data.name;
        this.species = character_data.species;
        this.image = character_data.image;
        this.renderCharacter()
    };

    renderCharacter() {
        let allCharacterContainer = document.getElementById('rickandmorty-container');
        let characterContainer = document.createElement("div")
        characterContainer.classList.add('ui', 'card');

        this.createCharacterImage(this.image, characterContainer);

        let characterName = document.createElement('h4')
        characterName.innerText = this.name

        let characterNumber = document.createElement('p')
        characterNumber.innerText = `#${this.id}`

        let characterSpecies = document.createElement('p')
        characterSpecies.innerText = this.species

        characterContainer.append(characterName, characterNumber, characterSpecies);
        allCharacterContainer.appendChild(characterContainer);
    };

    createCharacterImage(image, containerDiv) {
        let characterImgContainer = document.createElement('div')
        characterImgContainer.classList.add('image')

        let characterImage = document.createElement('img')
        characterImage.srcset = image

        characterImgContainer.append(characterImage);
        containerDiv.append(characterImgContainer);
    }

    get_character_urls = () => {
        const ids = [];
        for (let i = 1; i <= 20; i++) {
            ids.push(this.characterUrl + this.random());
        }
        return ids
    };

    random = (low = 1, high = 826) => Math.floor(Math.random() * (1 - low + high)) + low;
}

document.addEventListener("DOMContentLoaded", () => {

    renderEverything();
})

function renderEverything() {
    let allCharacterContainer = document.querySelector('#rickandmorty-container')
    allCharacterContainer.innerText = "";

    const rickandmorty = new RickAndMorty();
    rickandmorty.show();
}