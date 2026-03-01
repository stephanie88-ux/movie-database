import React, { useEffect, useState } from 'react';
import { useSearchParams,useNavigate, useParams } from 'react-router-dom';
import { getMovieDetails, getImageUrl } from '../services/api'

const MovieDetails= () => {
const {id } = useParams ();
const navigate = useNavigate ();

 
const [movie, setMovie] = useState(null);        
const [loading, setLoading] = useState(true);   
const [error, setError] = useState(null);      
 
useEffect(() => {
  const fetchMovieDetails = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getMovieDetails(id);
      setMovie(data);
    } catch (err) {
      setError('Failed to load movie details.');
    } finally {
      setLoading(false);
    }
  };
  
  fetchMovieDetails();
}, [id]); 
}

 if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-green-600">
        <div className="text-center">
        <p className="text-xl text-green-600">Loading movie details...</p>
        </div>
      </div>
    );
  }
if (error || !movie) {
    return(
        <div className="min-h-screen flex justufy-centre items centre bg-green-600">
        <div className="text-centre">
        <p className="text-xl text-green-600">error || movie not found</p>
        </div>



    <button
            onClick={() => navigate('/')}
            className="bg-emerald-900 hover:bg-blue-300 text-white 
                     px-6 py-3 rounded-lg transition-colors" >
                    
            Back to Home           
          </button>
        </div>
    );
  }
    
 export default MovieDetails;


     




