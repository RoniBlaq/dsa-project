'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import {useRouter} from 'next/navigation';

function SearchPage() {
    const [mentors, setMentors] = useState([....]);
    const [filteredMentors, setFilteredMentors] = useState([]);
    const handleSearch = (searchTerm) => {
        const filtered = mentors.filter((mentor) => mentor.name.toLowerCase().includes(searchTerm.toLowerCase()));
        setFilteredMentors(filtered);
    };
    useEffect(() =>{
        axiox.get()
        .then((response) => {
            setMentors(response.data);
        })
        .catch((error) => {

        })
    })
    return(
<div> 
    <SearchBar onSearch={handleSearch} />
    <div className="mentor-list">
        {filteredMentors.map((mentor) => (
            <div key={mentor.id} className="mentor-profile">
                <h2>{mentor.name}</h2>
                <p> {mentor.expertise}</p>
                <p> {mentor.bio}</p>
                <button> View Profile</button>
                 </div>
        ))}
    </div>
</div>
    );
}
export default SearchPage;