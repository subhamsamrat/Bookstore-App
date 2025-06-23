import React from 'react'
import banner from '../../public/banner.jpg'
function Banner() {
  return (
   <>
   <div  className='max-w-screen container py-10 mx-auto md:px-20 px-4 flex flex-col md:flex-row'>
    {/* left side */}
    <div className='w-full py-5 md:w-1/2 mt-12 md:mt-32 order-2 md:order-1 '>
    <div className='space-y-12'>
         <h1 className='text-4xl font-bold'>Hello, Welcoms here to learn somthing <span className='text-pink-500'>new everyday!!!</span>  </h1>
     <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque enim a, delectus eos earum, excepturi quis velit maiores quia optio sunt hic porro magni nam voluptates totam expedita doloribus debitis!</p>
   
    {/* email input  */}
    <label className="input md:w-xl border-none bg-gray-200 validator">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
    </g>
  </svg>
  <input type="email" placeholder="mail@site.com" required />
</label>
 </div>

    <button className="btn mt-5 btn-secondary">Secondary</button>
    </div>
    {/* right side */}
    <div className='mt-1 flex-col mt-10 md:flex-row-full md:w-1/2 order-1 md:order-2'>
    <img src={banner} className='h-140 w-140' alt="" />
    </div>
   </div>
   </>
  )
}

export default Banner
