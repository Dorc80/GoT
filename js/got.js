class GotService {

    async findHouseById(houseId) {
        let response = await fetch(`https://www.anapioficeandfire.com/api/houses/${houseId}`);
        return await response.json();
    }

}

let gotService = new GotService();

function addHouseEventListener() {

    let imgDivs = document.querySelectorAll('.house');

    for (var i = 0; i < imgDivs.length; i++) {
        imgDivs[i].addEventListener('click', clickHouseHandler);
    }

}

addHouseEventListener();

async function clickHouseHandler() {

    try {
        
        let response = await gotService.findHouseById(this.id);
    
        let houseNameP = document.querySelector('#house-name');
        houseNameP.innerHTML = 'Name: ' + response.name;
    
        let houseWordsP = document.querySelector('#house-words');
        houseWordsP.innerHTML = 'Words: ' + response.words;
    
        let houseTitlesP = document.querySelector('#house-titles');
        houseTitlesP.innerHTML = 'Words: ' + response.titles;
        
    } catch(error) {
        console.error(error);
    }

}