import React from 'react'

const Cards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
        <div className='rounded-xl relative'>
            <div  className='absolute w-full h-full bg-black/20 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>Sun's Out,BOGO's Out </p>
                <p className='px-2'>Through 8/26</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
             src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg" alt="" />
        </div>
        <div className='rounded-xl relative'>
            <div  className='absolute w-full h-full bg-black/20 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>Cafe Coffe Day's </p>
                <p className='px-2'>Through 9/26</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
             src="https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
        </div>
        <div className='rounded-xl relative'>
            <div  className='absolute w-full h-full bg-black/20 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>New Restaurants</p>
                <p className='px-2'>Through 10/26</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
             src="https://images.pexels.com/photos/916925/pexels-photo-916925.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
        </div>
        
      
    </div>
    
    
  )
}

export default Cards