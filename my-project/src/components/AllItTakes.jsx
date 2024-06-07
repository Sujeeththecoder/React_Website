import React from 'react'

function AllItTakes() {
  return (
    <div>
      <div className='text-white flex items-center justify-center flex-col mt-20 font-bold gap-1'>
        <h className='font-bold text-3xl font-sans'>Here's all it takes.</h>
        <p className='text-xl'>Follow these three simple steps to kickstart your musical quest!</p>
      </div>
      <div className=''>
        <div>
            <h1 className='text-2xl'>Schedule</h1>
            <p>Talk to your guru, decide on a convenient time, and join in from anywhere in the world</p>
        </div>
        <div className="flex items-center justify-center ">
    <img src="/images/Schedule.svg" alt="" className="w-60 h-60"/>
    <span className="text-white ml-4">
        <h1 className="text-2xl mb-1">Schedule</h1>
        <p>Talk to your guru, decide on a convenient time</p>
        <p>and join in from anywhere in the world</p>
    </span>
</div>
<div className="flex items-center justify-center text-white">
  <div>
<h1 className="text-2xl mb-1">Search</h1>
        <p>Punch in your requirements and match with the</p>
        <p>best instructors out there in the market</p>
        </div>
        
    <span className=" ml-4">
    <img src="/images/Search.svg" alt="" className="w-60 h-60"/>
    </span>
</div>
<div className="flex items-center justify-center ">
    <img src="/images/Study.svg" alt="" className="w-60 h-60"/>
    <span className="text-white ml-4">
        <h1 className="text-2xl mb-1">Study</h1>
        <p>Learn from the best and excel at your skills</p>
        <p>through carefully guided one-on-one sessions</p>
    </span>
</div>
<div className='mt-10 text-white flex justify-center items-center '>
  <button className='bg-orange-500 text-sm font-semibold rounded-xl px-12 py-2 w-64 h-10'> Find Your Guru</button>
</div>
      </div>
    </div>
  )
}

export default AllItTakes

// ml-48 mr-48 pl-28