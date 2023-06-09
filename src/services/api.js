import axios from 'axios';

const baseURL = 'https://localhost:3080/';

export const get = async () => {
    try {
        const response = await axios.get(`${baseURL}boards/`)
        console.log('response.data ', response.data);
        return response.data;
    } catch (error) {
        console.log('error ', error);
        return error.message;

    }
}