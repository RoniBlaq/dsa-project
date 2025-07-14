'use client';
import React,  { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import Navbar from '../../../components/Navbar';
import Profile from '../../../components/Profile';
import Logout from '../../../components/Logout';

function RequestPage() {
    const [requests, setRequests] = useState([]);
    useEffect(() => {
        axios.get('http://localhost/nextphp/bookings.php')
        .then(response => {
            setRequests(response.data);
        })
        .catch(error => {
            console.error(error);
        });
    }, []);

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


    return(
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
                                  <Link href="#" onClick={toggleDashboard} className="text-white-500 font-bold  absolute bottom-0 right-0">
                                 X
                                 </Link>
                                 </div> 
                 )}
            </div>

     <div className="containner mx-auto p-4 mt-10"> 
        <h1 className="text-3x1 font-bold mb-4">Request Status</h1>
        <table className="w-full border-collapse border border-gray-200">
        <thead className="bg-gray-100">
            <tr>
                <th className="border border-gray-200 px-4 py-2">Session ID</th>
                <th className="border border-gray-200 px-4 py-2">Metor Name</th>
                <th className="border border-gray-200 px-4 py-2">Status</th>
            </tr>
        </thead>
        
        <tbody>
    {requests.map((request) =>(
        <tr key={request.id}>
            <td className="border border-gray-200 px-4 py-2">{request.session_id}</td>
            <td className="border border-gray-200 px-4 py-2">{request.mentor_name}</td>
            <td className="border border-gray-200 px-4 py-2">
                {request.status === 'pending' && (
                    <span className="text-orange-500">pending</span>
                )}
                {request.status === 'accepted' && (
                    <span className="text-green-500">Accepted</span>
                )}
                {request.status === 'rejected' && (
                    <span className="text-red-500">Rejected</span>
                )}
            </td>
            </tr>
    ))}
    </tbody>
      </table>
</div>
 </React.Fragment>
    );
}

export default RequestPage;