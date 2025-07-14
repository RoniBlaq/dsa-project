'use client';
import React, {useState, useEffect}from "react";
import axios from 'axios';
import Link from 'next/link';
import Navbar from '../../../components/Navbar';
import Profile from '../../../components/Profile';
import Logout from '../../../components/Logout';
import {useRouter, useParams} from 'next/navigation';


 function UserPage() {
const [name, setName] = useState('');
const [bio, setBio] = useState('');
const [email, setEmail] = useState('');
const [menteeId, setMenteeId] = useState(null);

const [message, setMessage]= useState('');

const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
     formData.append('bio', bio);
      formData.append('email', email);
       formData.append('profilePicture', profilePicture);
      

       if (res.data.success) 
             {
               setMessage(res.data.success);
               setTimeout( ()=>{ 
                 router.push("/menteepage");
                }, 2000);
                
             }  

       if (mentorId) {
        axios.put(`http://localhost/nextphp/user.php /${mentorId}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then((response) => {
            console.log(response.data);
        });
       } else {
        axios.post('http://localhost/nextphp/user.php /${mentorId}', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then((response) => {
            console.log(response.data);
            setMentorId(response.data.id);
        })
        .catch((error) => {
            console.error(error);
        });
       }


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

return (
       
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


    <div className="bg-gray-100 min-h-screen">
        <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 xl:p-24">
            <div className="bg-white shadow-md rounded-lg p-4 md:p-6 lg:p-8">
                 <p className="text-red-500"> {message} </p>
<form onSubmit={handleSubmit}>
    <div className="mb-4">
    <label className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
    <input type="text" value={name} onChange={(e) => setName (e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
    </div>
    
     <div className="mb-4">
     <label className="block text-gray-700 text-sm font-bold mb-2">Bio:</label>
     <textarea value={bio} onChange={(e) => setBio (e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
        </div>
        <div className="mb-4">
       <label className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
       <input type="text" value={email} onChange={(e) => setEmail (e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
       </div>
       <div className="mb-4">
       <label htmlFor="ProfilePicture">
          <Profile/>
       </label>
       </div>
       <button className="bg-gray-700 text-sm px-2 rounded" type="submit">Save Profile</button>
</form>
</div>
</div>
</div>
</React.fragment>
);

}
export default UserPage;