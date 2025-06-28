import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Login from './Login'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

function Signup() {
  const location=useLocation()
  const form=location.state?.form?.pathname || "/"
  const navigate=useNavigate();
     const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm()
  
    const onSubmit = async(data) => {
      const userInfo={
        fullname:data.fullname,
        email:data.email,
        password:data.password
      }
    

    await axios.post("http://localhost:8000/user/signup",userInfo)
    .then((res)=>{
      console.log(res.data);
      if(res.data){
           toast.success("Signup succesful !");
           navigate(form,{replace:true}); 
           setTimeout(()=>{
              window.location.reload()
           },1000)
           
      }
     localStorage.setItem("Users", JSON.stringify(res.data.user));
          
         
    }).catch((error)=>{
      if(error.response){
        console.log(error);
        toast.error(error.response.data.message);
      }
         
    })
    }
  return (
    <>
    <div className='flex justify-center items-center h-screen'>

        <div className=" shadow-2xl p-5 rounded-md">
        <div className="">
          <form method='dialog' onSubmit={handleSubmit(onSubmit)}>
            <div className='flex '>
              <h3 className="font-bold text-lg">Signup</h3>
              {/* if there is a button in form, it will close the modal */}
            <Link to='/' className="btn btn-sm btn-circle btn-ghost  right-2 top-2 ml-90"
           
            >
              ✕
            </Link>
            </div>
            {/* full name */}
          <div className="space-y-2 mt-5 ">

                <span className="text-sm">Nmae</span>
            <br />
            <input
              className="hover:bg-gray-200 text-sm rounded-md w-90 py-1 px-2"
              type="text"
              placeholder="Enter your Full name"
               {...register("fullname", { required: true })}
            /> <br />
            {errors.fullname && <span className="text-sm text-red-500 absolute top-70 ">Name require</span>}
            <br />

            <span className="text-sm ">Email</span>
            <br />
            <input
             className="hover:bg-gray-200 text-sm rounded-md w-90 py-1 px-2"
              type="email"
              placeholder="Enter your email"
               {...register("email", { required: true })}
            /> <br />
            {errors.email && <span className="text-sm text-red-500 absolute top-91 ">Email require</span>}
            <br />

            <span className="text-sm">Password</span>
            <br />
            <input
              className="hover:bg-gray-200 text-sm rounded-md w-90 py-1 px-2"
              type="password"
              placeholder="Enter your pas sword"
               {...register("password", { required: true })}
            /> <br />
            {errors.password && <span className="text-sm text-red-500 absolute top-112   ">password require</span>}
          </div>
          <div className="flex mt-7">
            <button className="ml-5 bg-pink-500 text-white text-md px-2 py-1 rounded-md">
              Signup
            </button>
            
            <p className="ml-50 text-sm text-gray-500">
              Have an Account?
              <button 
              onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
              className="underline cursor-pointer text-blue-400 ">
               Login
              </button>
                 
            </p>
          </div>
          </form>
             <Login/>
        </div>
      </div>
    </div>
    </>
  )
}

export default Signup
