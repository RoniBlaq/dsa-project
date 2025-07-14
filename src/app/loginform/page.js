'use client';
import React, {useState }from "react";
import axios from 'axios';
import Link from 'next/link';
import {useRouter} from 'next/navigation';


export default function LoginformPage() {

const router= useRouter();
const [formvalue, setFormvalue]= useState({ email:"", password:""});
const [message, setMessage]= useState('');
const handleInput =(e)=>{ 
  setFormValue( {...formvalue, [e.target.name]:e.target.value});
}
const handleSubmit =async(e)=> {
  e.preventDefault();
  const formData= { email:formvalue.email, password:formvalue.password};
   
    const res= await axios.post("http://localhost/nextphp/loginform.php", formData);
    if (res.data.success)
       {
              setMessage(res.data.success);
              const userType = res.data.user_type;
              setTimeout( ()=> {

               if (userType === 'admin') {
              router.push('/adminpage123');
              } else if (userType === 'mentee'){
                router.push('/userpage');
              } else if (userType === 'mentor'){
                router.push('/mentorpage123');
              }

          }, 2000);
             
       } else {
            setMessage(res.data.error);
    }
  
};


  return (
    <React.Fragment>
   
    <div className="grid grid-rows--[auto_5px_auto] items-center justify-items-center  min-h-screen p-8 pb-4 gap-4 sm:p-4  font-[family-name:var(--font-geist-sans)]" style={{
      backgroundImage:'url(https://plus.unsplash.com/premium_photo-1670659359754-02934f07580f?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
      backgroundSize:'cover',
      backgroundPosition:'center',
      backgroundRepeat:'no-repeat',
      height:'100vh',
      width:'100%',
    }} >
       <h2 className="absolute top-0 left-0 text-yellow-500 font-bold cursor-pointer animate-pulse">Welcome to Rontech</h2>
        <h3 className="text-uppercase mb-1 text-black animate-bounce">LOGIN NOW</h3>
         <p className="text-red-500"> {message} </p>
   <form onSubmit={handleSubmit} className="max-w-md mx-auto rounded-lg bg-white-700 p-8 shadow-md text-black" style={{ border: '1px solid yellow'}}> 
         <input type="text" name="email" value={formvalue.name} required placeholder="enter your email"className="mb-4 w-full rounded-lg border p-2 focus:outline-none focus:ring-yellow-500"  onChange={handleInput}/>
        <input type="password" name="password" value={formvalue.name} required placeholder=" your password" className="mb-4 w-full rounded-lg border p-2 focus:outline-none focus:ring-yellow-500" onChange={handleInput} />
       <button name="submit" className="w-full rounded-lg bg-yellow-500 p-2 text-black hover:bg-yellow-700">login now</button>
        <p className="text-lg mt-5 text-black">{"Don't"} have an account? 
            <Link href="/" className="text-yellow-400 hover:text-yellow-700">register now</Link>
        </p>
    </form>
    </div>
    </React.Fragment>

  );
};