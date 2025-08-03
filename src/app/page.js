'use client';
import React, {useState }from "react";
import axios from 'axios';
import Link from 'next/link';
import {useRouter} from 'next/navigation';

export default function Home() {
const router= useRouter();
const [formvalue, setFormvalue] = useState({name:"", email:"", password:"", cpassword:"", user_type:""});
const [message, setMessage]= useState('');
const handleInput =(e)=> 
  setFormvalue( {...formvalue, [e.target.name]:e.target.value});

const handleSubmit =async(e)=> {
  e.preventDefault();
  const formData= {name:formvalue.name, email:formvalue.email, password:formvalue.password, cpassword:formvalue.password, user_type:formvalue.user_type};

    const res= await axios.post("http://localhost/nextphp/mentee.php", formData);
    if (res.data.success) 
      {
        setMessage(res.data.success);
        setTimeout( ()=>{ 
          router.push("/loginform");
         }, 2000);
         
      }  
};
  return (
    <React.Fragment>
    <div className="grid grid-rows-[auto_10px_auto] items-center justify-items-center min-h-screen p-8 pb-4 gap-4 sm:p-4 font-[family-name:var(--font-geist-sans)]" style={{
      backgroundImage:'url(https://plus.unsplash.com/premium_photo-1670659359754-02934f07580f?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'
    }} >
      <h2 className="absolute top-0 left-0 text-yellow-500 font-bold cursor-pointer animate-pulse">Welcome to Rontech</h2>
         <h3 className=" text-2x1 font-bold uppercase text-black animate-bounce">Register now</h3>
         <p className="text-red-500"> {message} </p>
           <form onSubmit={handleSubmit} className="max-w-md mx-auto rounded-lg bg-white-700 p-8 shadow-md text-black"  style={{ border: '1px solid yellow'}}>
               <input type="text" name="name" value={formvalue.name} required placeholder="enter your name" className="mb-4 w-full rounded-lg border p-2 focus:outline-none focus:ring-yellow-500" onChange={handleInput}/>
               <input type="text" name="email" value={formvalue.email} required placeholder="enter your email"className="mb-4 w-full rounded-lg border p-2 focus:outline-none focus:ring-yellow-500" onChange={handleInput}/>
               <input type="password" name="password" value={formvalue.password} required placeholder="enter your password"className="mb-4 w-full rounded-lg border p-2 focus:outline-none focus:ring-yellow-500" onChange={handleInput}/>
               <input type="password" name="cpassword" value={formvalue.cpassword} required placeholder="confirm your password" className="mb-4 w-full rounded-lg border p-2 focus:outline-none focus:ring-yellow-500" onChange={handleInput}/>
               <select name="user_type" className="mb-4 w-full rounded-lg border p-2 focus:outline-none focus:ring-yellow-500" value={formvalue.user_type} onChange={handleInput}>
                   <option value="mentee">mentee</option>
                   <option value="admin">admin</option>
                   <option value="mentor">mentor</option>
               </select>
               <button name="submit" className="w-full rounded-lg bg-yellow-500 p-2 text-black hover:bg-yellow-700">register now</button>
               <p className="mt-5 text-black" >Already have an account?
                   <Link href="/loginform"
                className="text-yellow-400 hover:text-yellow-700">
               login now 
               </Link>
               </p>
           </form>
    </div>
    </React.Fragment>
  );
}
