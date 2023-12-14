import axios from 'axios';

export const listServices = async (movieItem: object) => {
    try {
        let charactersData, planetsData, starshipsData, vehiclesData, speciesData;
        await Promise.all([
            charactersData = await Promise.all(movieItem.characters.map((character: string) => axios.get(character).then(response => response.data))),
            planetsData = await Promise.all(movieItem.planets.map((planet: string) => axios.get(planet).then(response => response.data))),
            starshipsData = await Promise.all(movieItem.starships.map((starship: string) => axios.get(starship).then(response => response.data))),
            vehiclesData = await Promise.all(movieItem.vehicles.map((vehicle: string) => axios.get(vehicle).then(response => response.data))),
            speciesData = await Promise.all(movieItem.species.map((specie: string) => axios.get(specie).then(response => response.data))),
        ]);

        const objectData = {
            characters: charactersData,
            planets: planetsData,
            starships: starshipsData,
            vehicles: vehiclesData,
            species: speciesData
        };
        console.log(objectData);
        return objectData;


    } catch (error) {
        console.error('Error al llamar a los servicios:', error);
        return error;
    }

};