'use client';
import React, {useState, useEffect}from "react";
import axios from 'axios';
import Link from 'next/link';
import Navbar from '../../../components/Navbar';
import Profile from '../../../components/Profile';
import Logout from '../../../components/Logout';

const MentorBookings = ({ bookings }) => {
    const handleUpdateBooking = (id, status) => {
        fetch('http://localhost/nextphp/track.php', {

            method: 'POST',
            headers: {
                'Content-Type': 'applicaton/json'
            },
            body:JSON.srtringify({id, status }),
        })
        .then((response) => response.json())
        .then((data)=> console.log(data))
        .catch((error) => console.error(error));
    };
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

        <React.fragment>
           
            <div>
                       <Navbar toggleDashboard={toggleDashboard} />
                       {showDashboard && (
                           <div className="container mx-auto p-4 md:p-6 lg:p-8 flex flex-col bg-gray-800 absolute top-0 left-0 shadow-md w-50 pt-4  h-screen"> 
                           
                           <ul className="text-white-500 flex-1 overflow-y-auto space-y-4 ">
                               <li>
                                   <Link href="/menteepage/session/i23" >Sessions</Link>
                               </li>
                              
                                  <li>
                                   <Link href="/mentorpage/request-book">Request</Link>
                               </li>
                           </ul>
                           <div className="mt-auto">
                             <Profile/>  
                             <Logout/>
                           </div>
                            <Link href="" onClick={toggleDashboard} className="text-white-500 font-bold  absolute bottom-0 right-0">
                           X
                           </Link>
                           </div> 
                       )}
                        </div>
           

        <div className="container mx-auto p-4">
            <h1 className="text-3x1 font-bold mb-4">Booking Requests</h1>
            {bookings && bookings.map((booking)=> (
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
            ))}
        </div>
        </React.fragment>
    )
}
export default MentorBookings;