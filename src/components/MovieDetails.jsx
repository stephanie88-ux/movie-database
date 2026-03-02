import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchmoviedetails } from '../services/api';
import { Link } from 'react-router-dom';
import { IMG_BASE_URL } from '../services/api';

const MovieDetails= () => {
  const {id } = useParams ();
  const [movie, setMovie] = useState(null);        
  const [loading, setLoading] = useState(true);    
  
  useEffect(() => {
    const loadDetails = async () => {
        try {
            const response = await fetchmoviedetails(id);
            setMovie(response.data); 
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };
    loadDetails();
  }, [id]);

  if (loading) return <p>Loading details...</p>;
  if (!movie) return <p>Movie not found.</p>;

  let imageUrl;
  if (movie.backdrop_path) {
      imageUrl = `${IMG_BASE_URL}${movie.backdrop_path}`; 
  } else {
      imageUrl = `https://placehold.co/600x400/EEE/31343C`;
  }
  return(
      <div className="min-h-screen">
        <div>
         <Link to={"/"} className="bg-emerald-900 hover:bg-blue-300 text-white px-6 py-3 rounded-lg transition-colors" >
            Back to Home           
          </Link>
        </div>
        <div className="text-centre mt-6">
          <div>
            <div  id={movie.id} className="flex flex-row font-bold bg-white shadow-lg rounded-lg mb-6 w-full">
              <img src={imageUrl} alt={movie.title} className='w-96' />
              <ul className='p-4'>
                  <li className='text-orange-500'>{movie.title}</li>
                  <li className='flex items-center'>{movie.vote_average} 
                  <span>
                      <svg className='w-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380 380"><path fill="#F02F8F" strokeWidth="#000" d="m209 38.8 26.1 80.2a20 20 0 0 0 19 13.8h84.3a20 20 0 0 1 11.8 36.2L282 218.6c-7 5.1-9.9 14.1-7.3 22.4l26.1 80.2c6 18.4-15.1 33.7-30.8 22.4L201.8 294a20 20 0 0 0-23.5 0l-68.2 49.6a20 20 0 0 1-30.8-22.4l26.1-80.2a20 20 0 0 0-7.3-22.4L29.9 169a20 20 0 0 1 11.8-36.2H126a20 20 0 0 0 19-13.8l26.1-80.2c6-18.4 32.1-18.4 38 0Z"></path></svg>
                  </span>
                  </li>
                  <li><p className='font-light'>{movie.overview}</p></li>
                  <li>{movie.original_language}</li>
                  <ul>
                    {movie.genres.map((item) => (
                        <li key={item.id} className='font-extralight italic'>{item.name}</li>
                    ))}
                  </ul>
              </ul>
            </div>
          </div>
        </div>
      </div>
  );
}
    
 export default MovieDetails;
