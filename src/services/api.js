import axios from 'axios'

const API_KEY = process.env.REACT_APP_TMBD_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';
const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w500';

export default axios.create({
  baseURL: BASE_URL,
  params: {
	api_key: API_KEY
  }
});

export const fetchPopularMovies = () => {
  return axios.fectch(`${BASE_URL}/movie/popular`, {
    params: {
      api_key: API_KEY
    }
  });
};

export async function fetchsearchBar(id) {

  try {
    const response = await axios.fetch(`${BASE_URL}/search/movie`, {
      params: {
        api_key: API_KEY,
        query: id
      }
    });
    return response;
  }
  catch (error) {
    console.error('Error searching for movie:', error);
    throw error;
  }
}

export async function fetchmoviedetails(id) {
  try {
    const response = await axios.fetch(`${BASE_URL}/movie/${id}`, {
      params: {
        api_key: API_KEY
      }
    });
    return response;
  }
  catch (error) {
    console.error('Error fetching movie details:', error);
    throw error;
  }
};




