import React from 'react'

function Cards({item}) {
  return (
   <>
   <div className='mt-5 my-3 p-3 z-0'>
    <div className="card bg-base-100 md:w-80 px-1 shadow-xl transition duration-700 hover:scale-105 hover:shadow-pink-500 ">
  <figure>
    <img className='z-0'
      src={item.image}
      alt="Story book" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">${item.price}</div>
      <div className="cursor-pointer border-[2px] rounded-full hover:bg-pink-500 hover:text-white hover:duration-300 px-1 py-0 ">Buy now</div>
    </div>
  </div>
</div>
   </div>
   </>
  )
}

export default Cards
