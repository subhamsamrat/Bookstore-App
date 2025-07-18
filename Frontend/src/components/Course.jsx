import Cards from '../components/Cards'
import {Link} from 'react-router-dom'
import { useState } from "react";
import { useEffect } from "react";
import axios from 'axios'
function Course() {

   const [book,setBook]=useState([])

    useEffect(()=>{ 
       const getBook=async()=>{
        try {
        const res= await  axios.get('http://localhost:8000/book');
        console.log(res.data);
        setBook(res.data)
        
        } catch (error) {
          console.log('ERROR in course.jsx get data:',error).json(401)
        }
       };
       getBook();
    },[])
   

  return (
    <>
      <div className="max-w-screen container mx-auto md:px-20 px-4">
        <div className="mt-28 justify-center text-center items-center">
          <h1 className="txet-2xl  md:text-4xl">
            We're delighted to have you{" "}
            <span className=" text-pink-500">Here! :)</span>
          </h1>
        
        <p className="mt-12">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, neque
          assumenda. Nesciunt officiis et commodi, consectetur nobis illu
          minima in eius, doloribus aliquid cumque labore eaque culpa, saepe hic
          provident.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam eveniet assumenda fugit. Blanditiis nostrum tempore optio modi ad! Dolorum voluptas, sapiente culpa magni excepturi iure. Quibusdam iusto ipsa explicabo recusandae!
        </p>
         <Link to='/'>
          <button className="bg-pink-500 text-white mt-6 px-4 py-2 rounded-md hover:bg-pink-700 hover:duration-400">Back</button>
         </Link>      
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {
            book.map((item)=>(
              <Cards key={item.id} item={item}/>
            ))
          }
        </div>
      </div>
    </>
  );
}

export default Course;
