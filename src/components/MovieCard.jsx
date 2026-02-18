import React from 'react'
import { useNavigate } from 'react-router-dom'
import { IMG_BASE_URL } from '../services/api';

function MovieCard({movie}) {
    const imageUrl = `${IMG_BASE_URL}${movie.backdrop_path}`; 
    return (
        <div  key={movie.id} className="font-bold bg-white shadow-lg rounded-lg mb-6 w-54 outline outline-offset-0 outline-pink-500">
        <img src={imageUrl} />
         <ul className='p-4'>
            <li className='text-orange-500'>{movie.title}</li>
            <li className='flex items-center'>{movie.vote_average} 
            <span>
                <svg className='w-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380 380"><path fill="#F02F8F" stroke="#000" stroke-width="10" d="m209 38.8 26.1 80.2a20 20 0 0 0 19 13.8h84.3a20 20 0 0 1 11.8 36.2L282 218.6c-7 5.1-9.9 14.1-7.3 22.4l26.1 80.2c6 18.4-15.1 33.7-30.8 22.4L201.8 294a20 20 0 0 0-23.5 0l-68.2 49.6a20 20 0 0 1-30.8-22.4l26.1-80.2a20 20 0 0 0-7.3-22.4L29.9 169a20 20 0 0 1 11.8-36.2H126a20 20 0 0 0 19-13.8l26.1-80.2c6-18.4 32.1-18.4 38 0Z"></path></svg>
            </span>
            </li>
            <li>{movie.original_language}</li>
         </ul>
         
      </div>
         
    );   
}
       
export default MovieCard;