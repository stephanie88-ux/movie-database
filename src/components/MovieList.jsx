import { useState, useEffect } from 'react';
import { fetchPopularMovies } from "../services/api";
import MovieCard from './MovieCard';
import { useMovies } from './MovieContext.jsx';

function MovieList() {
    const [error, setError] = useState(null); 
    const { movies, setMovies, loading, setLoading } = useMovies(); 

    useEffect(() => {
        const getMovies = async () => {
            setLoading(true);
            try {
                const response = await fetchPopularMovies();
                setMovies(response.data.results || [] );
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };
        getMovies();
    }, []);


    if (loading) {
        return <p>Loading data...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }
    return (
        <div className="columns-4 gap-4">
            {/* <p>This is the movie list component</p> */}
            {movies.map((item) => (
                <MovieCard key={item.id} movie={item}/>
            ))}
            {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
        </div> 
    );
}  

export default MovieList