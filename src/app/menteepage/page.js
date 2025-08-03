'use client';
import React, {useState, useEffect }from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Profile from '../../components/Profile';
import Logout from '../../components/Logout';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

 function MenteeDashboard() {
 const router = useRouter();
 const [showDashboard, setShowDashboard] = useState(false);
 const [mentee, setMentee] =useState(null);
  const [error, setError] = useState(null);

 useEffect(() => {
    const fetchMentee = async () => {
        try{
              const response =await fetch('http://localhost/nextphp/user.php');
              if (!response.ok){
                throw new Error(`HTTP error! status: ${response.status}`);
              }
            const data = await response.json();
         setMentee(data);
        } catch (error) {
            setError(error.message);
        }
    };
    fetchMentee();
 }, []);
    //   if (error) return <div>Error: {error}</div>;
    //  if (!mentee) return <div>Loading....</div>;

    const toggleDashboard = () => {
        setShowDashboard( ! showDashboard);
    };
  const handleLinkClick = () => {
    toggleDashboard();
  };
// 
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
        <div className="flex flex-col items-center p-10 ">
            <h2 className="text-3xl font-bold mt-5">{mentee?.name || 'Unknown'}</h2>
            <p className="text-lg text-gray-600">{mentee?.bio || 'No bio available'}</p>
            <p className="text-lg text-gray-600">{mentee?.email || 'No email available'}</p>
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
       </div>
         
          </React.Fragment>
    );
}

  

export default MenteeDashboard;