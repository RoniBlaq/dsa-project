'use client';
import React, {useState, useEffect}from "react";
import axios from 'axios';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Profile from '../../components/Profile';
import Logout from '../../components/Logout';
import {useRouter, useParams} from 'next/navigation';


 function UserPage() {
const [name, setName] = useState("");
const [bio, setBio] = useState("");
const [email, setEmail] = useState("");
const [menteeId, setMenteeId] = useState(null);
const [profilePicture, setProfilePicture] = useState(null);
const [message, setMessage]= useState('');
const router = useRouter();

const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
     formData.append('bio', bio);
      formData.append('email', email);
       formData.append('profilePicture', profilePicture);
      
       if (menteeId) {
        axios.put(`http://localhost/nextphp/user.php /${menteeId}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then((res) => {
             if (res.data.success) 
             {
               setMessage(res.data.success);
                console.log('response.data:', res.data);
                }
              router.push('/menteepage');
            
        })
        .catch((error) => {
            console.error(error);
    });
       }
     else { 
        axios.post('http://localhost/nextphp/user.php', formData, {
            headers: {
                'Content-Type' : 'multipart/form-data'
            }
        })
        .then((response) => {
            console.log(response.data);
            setMenteeId(response.data.id);
            router.push('/menteepage');
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
                                 <Link href="" onClick={toggleDashboard} className="text-white-500 font-bold  absolute bottom-0 right-0">
                                X
                                </Link>
                </div> 
             )} 
            </div> 

     <div className="min-h-screen"
   style={{
         backgroundImage:'url(https://t4.ftcdn.net/jpg/03/02/39/97/360_F_302399784_k69fNY2NhbWLYf3Xg4fUz50docoFAwjk.webp)',
      backgroundSize:'cover',
      backgroundPosition:'center',
      backgroundRepeat:'no-repeat',
      height:'100vh',
      width:'100%',
    }}>
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
      
       <button name="submit" className="bg-gray-700 text-sm px-2 rounded" type="submit">Save Profile</button>
</form>
</div>
</div>
</div>
{/* </div> */}
</React.Fragment>
);

}
export default UserPage;