'use client';
import React, { useState } from 'react';
import Profile from '../components/Profile';
import Logout from '../components/Logout';
import { useRouter } from 'next/navigation';

function DashboardNavbar({ toggleDashboard
}) {
    const router = useRouter();
    const [profileImage, setProfileImage] = useState(null);

    const handleProfileImageChange = (newImage) => {
    setProfileImage(newImage);
};

    return (
        <nav className="h-12 bg-gray-800 text-white p-2 flex justify-between items-center">
             <h2 className="absolute top-0 left-0 text-yellow-500 font-bold cursor-pointer animate-pulse">Welcome to Rontech</h2>
            {/* <h1 className="text-xl font-bold">Mentee Dashboard</h1> */}
            <button onClick={toggleDashboard} className="text-2x1">
                <svg xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
            </button>
            <div className="flex gap-2">
                <div className="w-24">
           <Profile
           profileImage={profileImage}
           onProfileImageChange={handleProfileImageChange}
           />
             </div>
             <div className="w-24">
           <Logout router={router} />
             </div>
             </div>
             </nav>

    );
};

export default DashboardNavbar;