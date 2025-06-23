import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"

function Login() {

       const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* if there is a button in form, it will close the modal */}
            <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </Link>
          <h3 className="font-bold text-lg">Login</h3>
          <div className=" mt-6 space-y-2">
            <span className="text-sm ">Email</span>
            <br />
            <input
              className="hover:bg-gray-200  rounded-md w-90 py-1 px-2 text-sm "
              type="email"
              placeholder="Enter your email"
               {...register("email", { required: true })}
            /> <br />
            {errors.email && <span className="text-sm text-red-500 absolute top-32 ">Email require</span>}
            <br />

            <span className="text-sm">Password</span>
            <br />
            <input
              className="hover:bg-gray-200 rounded-md w-90 py-1 px-2 text-sm  "
              type="password"
              placeholder="Enter your password"
               {...register("password", { required: true })}
            /> <br />
            {errors.password && <span  className="text-sm text-red-500 absolute top-52">Password require</span>}
          </div>
          <div className="flex mt-7">
            <button className="ml-5 bg-pink-500 text-white text-md px-2 py-1 rounded-md">
              Login
            </button>
            
            <p className="ml-50 text-sm text-gray-500">
              not registered?
              <Link to='/signup' className="underline cursor-pointer text-blue-400 underline-offset-auto">
               Sighup 
              </Link>
            </p>
          </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
