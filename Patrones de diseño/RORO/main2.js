const getCharacters = async ({name, status = "alive"}) => {
    const API = `https://rickandmortyapi.com/api/character/?name=${name}&status=${status}`;
    const data = await fetch(API);
    const characters = await data.json();

    return characters.results;
}

const characters = getCharacters(
    {
        name: 'rick', 
    }
);

console.log(characters);