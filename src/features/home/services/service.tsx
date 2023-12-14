import axios from 'axios';

export const callStarWarsApi = async () => {

    try {
        const response = await axios.get(`https://swapi.dev/api/films/`);

        return response.data.results;
    } catch (error) {
        return error;
    }
}
