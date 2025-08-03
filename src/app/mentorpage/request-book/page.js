'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import {useRouter} from 'next/navigation';
import Navbar from '../../../components/Navbar';
import Profile from '../../../components/Profile';
import Logout from '../../../components/Logout';

function MentorBookings ({ bookings }) {
const [showDashboard, setShowDashboard] = useState(false);
const [profilePicture, setProfilePicture] = useState(null);
 const router = useRouter();

    const handleUpdateBooking = (id, status) => {
        fetch('http://localhost/nextphp/track.php', {

            method: 'POST',
            headers: {
                'Content-Type': 'applicaton/json'
            },
            body:JSON.stringify({id, status })
        })
        .then((response) => response.json())
        .then((data)=> console.log(data))
        .catch((error) => console.error(error));
    };
    
    
        const toggleDashboard = () => {
            setShowDashboard(!showDashboard);
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
                                   <Link href="/menteepage/session/123" >Sessions</Link>
                               </li>
                              
                                  <li>
                                   <Link href="/request-book">Request</Link>
                               </li>
                           </ul>
                           <div className="mt-auto">
                             <Profile/>  
                             <Logout router={router} />
                           </div>
                            <Link href="" onClick={toggleDashboard} className="text-white-500 font-bold  absolute bottom-0 right-0">
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
        <div className="container mx-auto p-4">
            <h1 className="text-3x1 font-bold mb-4 text-black-500">Booking Requests</h1>
            {bookings ? (
                  bookings.map((booking)=> (
                <div key={booking.id} className="bg-white shadow-md p-4 mb-4">
                    <p>Mentee: {booking.meetee_name}</p>
                    <p>Session Date: {booking.session_date}</p>
                    <p>Session Time: {booking.session_time}</p>
                     <p>Topic: {booking.Topic}</p>
                     <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2" onClick={() => handleUpdateBooking(booking.id, 'accepted')}>
                        Accept</button>
                        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2" onClick={() => handleUpdateBooking(booking.id, 'rejected')}>
                        Reject</button> 
                </div>
            ))
             
            ) :(
                 <p>Loading....</p>
            )}
        </div>
        </div>
        </React.Fragment>
    );
}
export default MentorBookings;