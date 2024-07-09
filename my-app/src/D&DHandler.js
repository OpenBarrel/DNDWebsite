const BASE_URL = "https://dnd5eapi.co";

export async function getAllSpells() {

    const spellIndexes = await fetch(BASE_URL + "/api/spells").then((response) => response.json());
    return Promise.all (  
        spellIndexes.results.map( (index) => fetch(BASE_URL + index.url).then((response) => response.json()))
    );
};

export async function getAllRaces(){
    const raceIndexes = await fetch(BASE_URL + "/api/races").then((response) => response.json());
    return Promise.all (
       raceIndexes.results.map( (index) => fetch(BASE_URL + index.url).then((response) => response.json()))
    );
};

export async function getAllClasses(){
    const raceIndexes = await fetch(BASE_URL + "/api/classes").then((response) => response.json());
    return Promise.all (
       raceIndexes.results.map( (index) => fetch(BASE_URL + index.url).then((response) => response.json()))
    );
}