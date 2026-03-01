import { useState, useEffect } from 'react';
import { fetchPopularMovies } from "../services/api";
import MovieCard from './MovieCard';

function MovieList() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null); 

    useEffect(() => {
        const getMovies = async () => {
        console.log("testing")
        console.log("PRINTING DATA")
        setLoading(true);
        try {
            const data = await fetchPopularMovies();
            console.log(data);
            setData(data);
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
        {data.results.map((item) => (
            <MovieCard key={item.id} movie={item}/>
        ))}
            {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
        </div> 
    );
}  

export default MovieList    
