'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import {useRouter} from 'next/navigation';

function SearchPage() {
    const [mentors, setMentors] = useState([]);
    const [filteredMentors, setFilteredMentors] = useState([]);

    const handleSearch = (searchTerm) => {
        const filtered = mentors.filter((mentor) => mentor.name.toLowerCase().includes(searchTerm.toLowerCase()));
        setFilteredMentors(filtered);
    };
    useEffect(() => {
        axiox.get('http://localhost/nextphp/mentor.php')
        .then((response) => {
            setMentors(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }, []);
    return(
   <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 xl:p-24"> 
    <SearchBar onSearch={handleSearch} className="mb-6" />
    <div className="mentor-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredMentors.map((mentor) => (
            <div key={mentor.id} className="mentor-profile bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300">
                <h2 className="text-lg font-bold mb-2">{mentor.name}</h2>
                <p className="text-gray-600 mb-2"> {mentor.expertise}</p>
                <p lassName="text-gray-600 mb-2"> {mentor.bio}</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> View Profile</button>
                 </div>
        ))}
    </div>
</div>
    );
}
export default SearchPage;