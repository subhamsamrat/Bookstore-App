import React from 'react'
import { useAuth } from '../context/AuthProvider';
import toast from 'react-hot-toast';

function Logout() {

       const [authUser, setAuthUser] = useAuth();
       const handleLogout=()=>{
        try {
            localStorage.removeItem("Users");
            toast.success("Logout succesfully");
            setTimeout(()=>{
                  window.location.reload();
            },1000)
           
        } catch (error) {
           setTimeout(()=>{
             toast.error("ERROR:",error);
           })
        }
       }
  return (
    <div>
      <button className='px-3 py-2 bg-red-500 font-bold rounded-md cursor-pointer text-white'
      onClick={handleLogout}>
        Logout</button>
    </div>
  )
}

export default Logout
