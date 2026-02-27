import React, { useEffect, useState } from 'react';
import { useSearchParams,useNavigate, useParams } from 'react-router-dom';
import { getMovieDetails, getImageUrl } from '/..services/api'

const MovieDetails= () => {
const {id } = useParams ();
const navigate = usenavigate ();

const [movie, setMovie] = useState(null);
const [load, setLoading] = useSate(true);
const [error, setError] = useState(null);

useEffect (() {
    async function getMovie() {
        const { data } = await axios.get('https://api.themoviedb.org/3');
        setMovieDetails(data);

    }

}
)
 


     




