'use client';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Link from 'next/link'
import {useRouter} from 'next/navigation';

export default function Adminpage() {

  const [userData, setUserData]= useState([]);
  const [message, setMessage]= useState('');
  useEffect( ()=>{
    getUserData();
  }, []);

  const getUserData= async () => {
      const reqData= await fetch("http://localhost/nextphp/user.php");
     const resData= await reqData.json();
     setUserData(resData);
    }

 const handleDelete= async(id)=>{
const res= await axios.delete(`http://localhost/nextphp/user.php/${id}`);
setMessage(res.data.success);
 getUserData();
 }

  return (
    <React.Fragment>
      <div className="max-w-7x1 mx-auto p-4 ">
        <div className="flex flex-col justify-center mt-4 text-yellow-500">   
    <h4 className='mb-4 text-lg font-bold'>page</h4>  
    <p className='text-red-500'>{ message}</p>
    <table className='w-full table-auto'> 
      <thead>
        <tr>
          <th className='px-4 py-2'>Sr.No</th>
           <th className='px-4 py-2'>Name</th>
            <th className='px-4 py-2'>Bio</th>
             <th className='px-4 py-2'>Email</th>
               <th className='px-4 py-2'>Action</th>
        </tr>
      </thead>
      <tbody>
        {
           userData.map((uData,index)=>(
        <tr key={index}>  
          <th className='border-2 border-black px-4 py-2'>{index+1}</th>
          <td className='border-2 border-black px-4 py-2'>{uData.name}</td>
          <td className='border-2 border-black px-4 py-2'>{uData.bio}</td>
          <td className='border-2 border-black px-4 py-2'>{uData.email}</td>
          <td className='border-2 border-black px-4 py-2'> 
            <Link href={`/edituser/${uData.id}`} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded m-4">Edit
            </Link>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded m-4" onClick={ ()=>handleDelete(uData.id)}>Delete
              </button>
          </td>
        </tr>
            ))
          }
        
      </tbody>
       </table>
    </div>
    </div>
    </React.Fragment>
  );
}
