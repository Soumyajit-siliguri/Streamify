import axios from 'axios';

const API_KEY = '4d4ab045';
const BASE_URL = 'http://www.omdbapi.com/';

export const fetchMovies = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&s=${query}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error;
  }
};
