'use client';
import { useRouter } from 'next/navigation';
// import {useEffect, useState } from 'react';

function Logout () {
 const router = useRouter();

 const handleLogout = () => { 
    router.push('/');
   
 };

    return(
<button onClick={handleLogout} className="bg-red-500 hover:bg-red-700 text-white text-sm font-bold py-1 px-2 rounded">Log-out</button>

    );
}
export default Logout;