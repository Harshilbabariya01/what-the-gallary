import axios from "axios";

const KEY = '?client_id=aAepBGABYxpNWyI8q6mnIgGkDh_bEKK4nSSS58iEaJE';
const URL = `https://api.unsplash.com/photos/`;

const fetchImages = async page => {
    const response = await axios.get(`${URL}${KEY}&per_page=10&page=${page}`);
    const data = await response.data;
    if (response.status >= 400) {
        throw new Error(data.errors);
    }
    return data;
};

const fetchImageStats = async id => {
    const response = await axios.get(`${URL}/${id}/statistics${KEY}`);
    const data = await response.data;
    if (response.status >= 400) {
        throw new Error(data.errors);
    }
    return data;
};

export { fetchImages, fetchImageStats };
