'use client';
import React, {useState, useEffect }from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Profile from '../../components/Profile';
import Logout from '../../components/Logout';

 function MenteeDashboard() {

     const [showDashboard, setShowDashboard] = useState(false);

    const toggleDashboard = () => {
        setShowDashboard( ! showDashboard);
    };
  const handleLinkClick = () => {
    toggleDashboard();
  };

  const handleFileChange = (e) => {
    setProfilePicture(e.target.files[0]);
};

    return (
         <React.Fragment>
         
             <div>
            <Navbar toggleDashboard={toggleDashboard} />
            {showDashboard && (
                <div className="container mx-auto p-4 md:p-6 lg:p-8 flex flex-col bg-gray-800 absolute top-0 left-0 shadow-md w-50 pt-4  h-screen"> 
                
                <ul className="text-white-500 flex-1 overflow-y-auto space-y-4 ">
                    <li>
                        <Link href="/menteepage/session/i23" >Sessions</Link>
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
                  <Logout/>
                </div>
                 <Link href="" onClick={toggleDashboard} className="text-white-500 font-bold  absolute bottom-0 right-0">
                X
                </Link>
                </div> 
            )}
             </div>
        <div className="container mx auto p-4 md:p-6 lg:p-8">
            <h1 className="text-3x1 font-bold mb-4 text-gray-500"> MenteeDashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ml-8">
                <Link href="/menteepage/session/123">
                <div className="bg-white rounded-lg shadow-md p-4 hover:bg-gray-100 cursor-pointer text-yellow-700">
                        <h2 className="text-xl font-bold mb-2"> Sessions</h2>
                        <p>Book sessions</p>
                 </div>
                 </Link>
                 <Link href="/menteepage/search-mentor">
                <div className="bg-white rounded-lg shadow-md p-4 hover:bg-gray-100 cursor-pointer text-yellow-700">
                        <h2 className="text-xl font-bold mb-2"> Search Mentor</h2>
                        <p>Find Mentor</p>
                 </div>
                 </Link>
                  <Link href="/menteepage/my-request">
                <div className="bg-white rounded-lg shadow-md p-4 hover:bg-gray-100 cursor-pointer text-yellow-700 ">
                        <h2 className="text-xl font-bold mb-2"> My Requests</h2>
                        <p>View your Mentorship requests</p>
                 </div>
                 </Link>
            </div>
         </div>
          </React.Fragment>
    );
}

export default MenteeDashboard;