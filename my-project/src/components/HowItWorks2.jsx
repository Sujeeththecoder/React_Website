import React from 'react'

function HowItWorks2() {
  return (
    <div>
        <div className='text-white  font-bold text-2xl text-center mt-20'>How it Works</div>

        <div className='flex justify-center items-center gap-x-52 mt-14 mb-20'>
       
      <div className='h-52 w-52 mt-6 text-white justify-center items-center text-center'>
      <img src="/images/create.svg" alt="" />
      <h1 className='font-bold text-lg mt-6'>Create</h1>
      <p className='text-base   font-medium mt-1'>Build your profile, showcase your skills, and decide your fee structure</p>
      </div >

      <div className='h-40 w-40 -mt-10 text-white justify-center items-center text-center'>
      <img src="/images/coordinate.svg" alt="" />
      <h1 className='font-bold text-lg mt-4'>Coordinate</h1>
      <p className='text-center w-56 text-base -ml-8 mt-1'>Receive scheduling requests from fully paid members, and confirm as per your availability</p>
      </div>
      
      <div className='h-52 w-52 text-white justify-center items-center text-center '>
      <img src="/images/cultivate.svg" alt="" />
      <h1 className='font-bold text-lg mt-6'>Cultivate</h1>
      <p className='text-base mt-1'>Focus solely on building your members and your brand, whilst leaving the rest to us</p>
      </div>
      </div>
      
    </div>
  )
}

export default HowItWorks2
