import React from "react";
import { Navigate, Route,Routes } from 'react-router-dom'
import Home from "./components/home/Home"
import Courses from "./courses/Courses";
import Signup from "./components/Signup";
import toast, { Toaster } from 'react-hot-toast';
import { useAuth } from "./context/AuthProvider";


function App() {
     const [authUser,serAuthUser]=useAuth()
      console.log(authUser);

 return (
    <>
    <div className="">
 <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/course' element={authUser?<Courses/>:<Navigate to="/signup"/>}/>
       <Route path='/signup' element={<Signup/>}/> 
     </Routes>
      <Toaster />     

    </div>

    </>
  );
}

export default App;
