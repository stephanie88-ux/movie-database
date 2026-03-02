import React, { createContext, useState, useContext } from 'react';
import { fetchSearchResults } from '../services/api';

const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchMovies = async (query) => {
    console.log("testing", query);
    setLoading(true);
    try {
      const response = await fetchSearchResults(query);
      console.log("testing", response);
      setMovies(response.data.results || []);
    } finally {
      setLoading(false);
    }
  };

  return (
    <MovieContext.Provider value={{ movies, setMovies, loading, setLoading, fetchMovies }}>
      {children}
    </MovieContext.Provider>
  );
};

// Custom hook for easier access
export const useMovies = () => useContext(MovieContext);