'use client';
import  { useState} from 'react';

function SearchBar({ onSearch }) {
    const [searchTerm, setSearchTerm] =useState('');
    const handleSearch = (e) => {
        e.preventDefault();
        onSearch(searchTerm);
    };

    return(
 <form onSubmit={handleSearch}>
    <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.terget.value)}
    placeholder="Search...." className="w-full p-2 border border-gray-300 rounded-lg" />
    <button type="submit" className="bg-gray-800 text-white p-2 rounded-lg">
        Search</button>
     </form>
    );
}
export default SearchBar;