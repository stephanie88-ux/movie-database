import axios from 'axios'

const API_ACCESS_TOKEN = process.env.REACT_APP_API_ACCESS_TOKEN;
const BASE_URL = 'https://api.themoviedb.org/3';
export const IMG_BASE_URL = 'https://image.tmdb.org/t/p/original';

export default axios.create({
  baseURL: BASE_URL,
  headers: {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${API_ACCESS_TOKEN}`
  }
});


export async function fetchPopularMovies() {
  try {
    const response = await axios.get(`${BASE_URL}/movie/popular?api_key=ae79912837f7e732ceea98f48a3f9978`);
    const data = await response.data;
    console.log(data)
    return data;
  } catch (error) {
    console.error("Error fetching movies", error);
    throw error;
  }
};

export async function fetchsearchBar(id) {

  try {
    const response = await axios.fetch(`${BASE_URL}/search/movie`, {
      params: {
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
    const response = await axios.fetch(`${BASE_URL}/movie/${id}`);
    return response;
  }
  catch (error) {
    console.error('Error fetching movie details:', error);
    throw error;
  }
};




