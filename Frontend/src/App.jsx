import React from "react";
import { Route,Routes } from 'react-router-dom'
import Home from "./components/home/Home"
import Courses from "./courses/Courses";
import Signup from "./components/Signup";

function App() {

  return (
    <>
    <div className="">
 <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/course' element={<Courses/>}/>
       <Route path='/signup' element={<Signup/>}/> 
     </Routes>

    </div>

    </>
  );
}

export default App;
