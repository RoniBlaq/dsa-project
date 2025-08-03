'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import Search from '../../../components/Search';
import {useRouter} from 'next/navigation';
import Navbar from '../../../components/Navbar';
import Profile from '../../../components/Profile';
import Logout from '../../../components/Logout';


function SearchPage() {
    const [mentors, setMentors] = useState([null]);
    const [filteredMentors, setFilteredMentors] = useState([]);
    const router = useRouter();
const [showDashboard, setShowDashboard] = useState(false);
 const [searchQuery, setSearchQuery] = useState('');
    const toggleDashboard = () => {
        setShowDashboard(!showDashboard);
    };
  const handleLinkClick = () => {
    toggleDashboard();
  };
  const handleFileChange = (e) => {
    setProfilePicture(e.target.files[0]);
  };
    const handleSearch = (query) => {
        if (!query) {
            setFilteredMentors(mentors);
            return;
        }
        const filtered = mentors.filter((mentor) => mentor.name.toLowerCase().includes(query.toLowerCase()));
        setFilteredMentors(filtered);
        console.log("Filtered Mentors:", filtered);
    };
    useEffect(() => {
        axios.get('http://localhost/nextphp/mentor.php')
        .then((response) => {
            setMentors(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }, []);
    return(
     <React.Fragment>
        <div>
                <Navbar toggleDashboard={toggleDashboard} />
                 {showDashboard && (
                 <div className="container mx-auto p-4 md:p-6 lg:p-8 flex flex-col bg-gray-800 absolute top-0 left-0 shadow-md w-50 pt-4  h-screen"> 
                                 
                                 <ul className="text-white-500 flex-1 overflow-y-auto space-y-4 ">
                                     <li>
                                         <Link href="/menteepage" >Home</Link>
                                     </li>
                                     <li>
                                         <Link href="/menteepage/session/123" >Sessions</Link>
                                     </li>
                                     <li>
                                         <Link href="/menteepage/search-mentor">Search-Mentors</Link>
                                     </li>
                                        <li>
                                         <Link href="/menteepage/my-request">My Request</Link>
                                     </li>
                                 </ul>
                                 <div className="mt-auto ">
                                   <Profile/>  
                                   <Logout router={router} />
                                 </div>
                                  <Link href="#" onClick={toggleDashboard} className="text-white-500 font-bold  absolute bottom-0 right-0">
                                 X
                                 </Link>
                                 </div> 
                 )}
            </div>
     
               <div style={{
         backgroundImage:'url(https://t4.ftcdn.net/jpg/03/02/39/97/360_F_302399784_k69fNY2NhbWLYf3Xg4fUz50docoFAwjk.webp)',
      backgroundSize:'cover',
      backgroundPosition:'center',
      backgroundRepeat:'no-repeat',
      height:'100vh',
      width:'100%',
    }} >
         
   <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 xl:p-24"> 
    <Search onSearch={handleSearch} value={searchQuery} className="mb-6" />
    <div className="mentor-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredMentors.lenght > 0 ? (
        filteredMentors.map((mentor) => (
            <div key={mentor.id} className="mentor-profile bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300">
                <h2 className="text-lg font-bold mb-2">{mentor.name}</h2>
                <p className="text-gray-600 mb-2"> {mentor.expertise}</p>
                <p className="text-gray-600 mb-2"> {mentor.bio}</p>
                <p className="text-gray-600 mb-2"> {mentor.availability}</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> View Profile</button>
                 </div>
        ))
        ): (
            <p>No details yet</p>
        )}
    </div>
</div>
</div>
 </React.Fragment>
    );
}
export default SearchPage; 