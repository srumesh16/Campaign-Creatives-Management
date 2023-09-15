import React from 'react'
import { FaSignOutAlt } from "react-icons/fa";
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';



const header = () => {

  const{data:session} = useSession();
  const router = useRouter();

  const handleSignOut = async() =>{
    await signOut({ callbackUrl: "/login"});
  };

  
  return (
    <div className="frame-2">
        <div className="frame-3">
            <img
                className="frame-1000004664"
                src="img/frame-1000004664.svg"
                alt="Frame 1000004664"
            />
            <img className="line-1 line" src="img/line-1.svg" alt="Line 1" />
            <div className="product-support">Campaign Creatives Management</div>
        </div>
        <div className="frame-2-1">
              <div className="name">{session?.user?.name}</div>
            
            <button onClick ={handleSignOut} className="logout-button"> 
            <FaSignOutAlt height="14px" width="14px" color="white"/>
            </button>
          </div>
      </div>
    
  )
}

export default header


