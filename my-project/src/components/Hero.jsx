import React from 'react';


function Hero() {
  return (
    <div className='pt-24 z-50 navbar-container bg-cover bg-center' style={{ backgroundImage: "url('/images/2.jpg')", backgroundPosition: 'center bottom', height: '1000px'}}>
    <div className='text-white'>
      <div className='w-full text-center items-center mt-40 mb-30 h-screen mx-auto flex flex-col text-bold'>
<div className='font-bold text-2xl sm:text-4xl'>
  <h1 className='z-90 text-white font-bold mb-4 m-auto'>Find Your Teacher Based On Your Budget</h1>
<div>
  <button className=' text-lg bg-blue-700 text-white py-1 px-4 border border-blue-700 hover:border-transparent rounded mr-4'>Find Your Instructor</button>
  <button className=' text-lg bg-white text-black py-1 px-4 border border-white hover:border-transparent rounded '>Book A Free Session Now</button>
  </div>
  
  </div>
</div>
      </div>
    </div>
  )
}

export default Hero;
