import React, { useEffect, useState } from 'react';
import { useSearchParams,useNavigate, useParams } from 'react-router-dom';
import { getMovieDetails, getImageUrl } from '../services/api'

const MovieDetails= () => {
const {id } = useParams ();
const navigate = useNavigate ();

 
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

     




