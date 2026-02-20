import React from 'react';
import { useState } from 'react';


const searchBar = ({ onSeacrh }) => {

const [ query, setQuery ] = useState('');

const handleSubmit = (e) => {
e.prventDefault (e);
if (query.trim()) {
onSeacrh (query); 
 
}}};

retun (
    <div className="w-full px-6 px-4 max-w-xl mx-auto">
    <form onSubmit ={handleSubmit} className='relative'>
    <input 
    type="text"
    value={query}
    onChnge={(e) => setQuery(e.target.value)}
    className="w-full px-6 px-4 max-w-xl mx-auto tx-lg rounded-full border-gray-200">



    </input>
    </form>

     

     </div>
)
    

