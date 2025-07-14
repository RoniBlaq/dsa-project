'use client';
import React, { useState, useEffect } from 'react';
import Navbar from '../../../../components/Navbar';
import Profile from '../../../../components/Profile';
import Logout from '../../../../components/Logout';
 import { useRouter } from 'next/navigation';
 import Link from 'next/link';

function SessionsPage({ mentorId }) {
    
        const router = useRouter();
     
      const [mentor, setMentor] = useState ({});
      const [sessionDetails, setSessionDetails] = useState({
        date: '',
        time: '',
        topic: '',
      });
      const [message, setMessage]= useState('');
      useEffect(() => {
        fetch(`http://localhost/nextphp/mentor.php`)
        .then(response => response.json())
        .then(data => setMentor(data));
      }, [mentorId]);

      const handleInputChange = (e) => {
        setSessionDetails({
            ...sessionDetails,
            [e.target.name]: e.target.value,
        });
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
         
       if (res.data.success) 
      {
        setMessage(res.data.success);
      };

      const handleBookSession = (e) => {
            router.push
        ('/my-request');
        e.preventDefault();
        fetch('http://localhost/nextphp/bookings.php', {
            method: 'POST',
            headers: {'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                mentorId,
            ...sessionDetails,
            }),
        })
         .then(response => response.json())
         .then(data => console.log(data));
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
      <div className="max-w-md mx-auto p-4 md:p-6 lg-p-8 bg-white rounded shadow-md text-black">
          <h1 className="text-3x1 font-bold mb-4">{mentor.name}</h1>  
            <p className="text-lg text-gray-600 mb-6">{mentor.bio}</p>  

            <form onSubmit={handleBookSession} className="space-y-4">
             <div>
             <label className="block text-sm font-medium mb-2">Date:</label>
             <input type="date" name="date" value={sessionDetails.date} onChange={handleInputChange} className="block w-full p-2 border border-gray-300 rounded" />
             </div>
              <div>
             <label className="block text-sm font-medium mb-2">Time:</label>
             <input type="time" name="time" value={sessionDetails.time} onChange={handleInputChange} className="block w-full p-2 border border-gray-300 rounded" />
             </div>
              <div>
             <label className="block text-sm font-medium mb-2">Topic:</label>
             <input type="text" name="text" value={sessionDetails.topic} onChange={handleInputChange} className="block w-full p-2 border border-gray-300 rounded" />
             </div>
             <p className="text-red-500"> {message} </p>
            <button type="submit" className="bg-gray-800 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded">Book Session</button>
            {/* onClick={handleBookSession} */}
               </form>
      </div>
   
     </React.Fragment>

    );
}

export default SessionsPage;