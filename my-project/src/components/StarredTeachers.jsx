import React from 'react';

function StarredTeachers() {
  return (
    <div className="relative">
      <img src="/images/11.jpg" alt="" className="w-full h-auto" />
      <div className='absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white -mt-20'>
        <h1 className='font-bold font-sans'>BECOME A INSTRUCTOR</h1>
        <h1 className='text-4xl font-bold'>Enabling your talents to turn your passion into a</h1>
        <h1 className='text-4xl font-bold'>career</h1>
        
              <button className='bg-orange-800 text-white text-sm mt-5 h-12 w-32 rounded-lg'>GET STARTED</button>
      </div>
    </div>
  );
}

export default StarredTeachers;
