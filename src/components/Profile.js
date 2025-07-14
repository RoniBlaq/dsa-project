'use client';
import React, {useState, useEffect}from "react";
import Image from 'next/image';
import Link from 'next/link';

  function Profile() {
    const [profileImage, setProfileImage] = useState(null);

    const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setProfileImage(reader.result);
    };
       reader.readAsDataURL(file);
};
    return (
    <div className=" relative rounded-full border-2 border-gray-300 w-12 h-12 flex items-center justify-center">
      <input id="profilePicture" type="file" onChange={handleFileChange} style={{display: 'none'}} />
      {profileImage && (
        <Image src={profileImage}
        width={100}
        height={100}
        className="object-cover rounded-full" alt="Profile picture" />
      )}
      <div className="absolute inset-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 " onClick={()=> document.getElementById('profilePicture').click()}>
        {!profileImage && (
          <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg" className="m-auto-0-auto">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
</svg>
        )}

</div>
</div>
    );
}
export default Profile;