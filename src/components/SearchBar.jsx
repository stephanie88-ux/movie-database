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

    <button type="button" class="text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">Submit</button>

    </input>
    </form>
    </div>

);

export default searchBar;
    

