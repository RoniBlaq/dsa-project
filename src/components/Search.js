'use client';
import React, { useState} from 'react';

function Search({ onSearch }) {
    const [query, setQuery] =useState('');
    const handleSearch = (e) => {
        e.preventDefault();
        onSearch(query);
    };

    return(
 <form onSubmit={handleSearch}>
    <input type="text" value={query} onChange={(e) => setQuery(e.target.value)}
    placeholder="Search Mentors...." className="w-full p-2 border border-gray-300 rounded-lg" />
    <button type="submit" className="bg-gray-800 text-white p-2 rounded-lg ml-2 bg-blue-500 hover:bg-blue-700 py-2 px-4">
        Search</button>
     </form>
    );
}
export default Search;