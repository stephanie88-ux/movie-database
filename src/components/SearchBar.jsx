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
    <div className=""

     >

     </div>
)
    

