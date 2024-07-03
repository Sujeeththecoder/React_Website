import React from 'react';

function PickYourChoice() {
  return (
    <div className='min-h-screen bg-gray-400 flex items-center justify-center '>
      <div className='absolute inset-0 backdrop-blur-sm'></div>
      <div className='relative bg-white h-[700px] w-[800px] rounded-lg shadow-md mt-0 mb-8'>
        <div className='flex flex-row ml-8 mt-8'>
          <h1 className='text-2xl font-bold'>Pick your choice</h1>
          <div className='text-lg ml-40 font-medium font-sans flex gap-x-6 mt-2'>
            <p>Western</p>
            <p>Indian Classical</p>
            <p>Others</p>
          </div>
        </div>
        <div className='grid grid-cols-4 gap-x-0 myGridContainer font-sans font-semibold' style={{ gridColumnGap: '6px' }}>
          <div className='relative mt-14 ml-12 bg-gray-600 rounded-lg shadow-lg bg-cover bg-center h-[120px] w-[120px]' style={{ backgroundImage: "url('/images/21.png')" }}>
            <h1 className='absolute hover:bg-orange-600 hover:text-white rounded-sm bottom-0 p-1 text-center w-full bg-white text-black'>Drums</h1>
          </div>
          <div className='relative mt-14 ml-12 bg-gray-600 rounded-lg shadow-lg bg-cover bg-center h-[120px] w-[120px]' style={{ backgroundImage: "url('/images/22.png')" }}>
            <h1 className='absolute  hover:bg-orange-600 hover:text-white rounded-sm bottom-0 p-1 text-center w-full bg-white text-black'>piano</h1>
          </div>
          <div className='relative mt-14 ml-12 bg-gray-600 rounded-lg shadow-lg bg-cover bg-center h-[120px] w-[120px]' style={{ backgroundImage: "url('/images/23.png')" }}>
            <h1 className='absolute  hover:bg-orange-600 hover:text-white rounded-sm bottom-0 p-1 text-center w-full bg-white text-black'>Violin</h1>
          </div>
          <div className='relative mt-14 ml-12 bg-gray-600 rounded-lg shadow-lg bg-cover bg-center h-[120px] w-[120px]' style={{ backgroundImage: "url('/images/24.png')" }}>
            <h1 className='absolute  hover:bg-orange-600 hover:text-white rounded-sm bottom-0 p-1 text-center w-full bg-white text-black'>Ukulele</h1>
          </div>
          <div className='relative mt-14 ml-12 bg-gray-600 rounded-lg shadow-lg bg-cover bg-center h-[120px] w-[120px]' style={{ backgroundImage: "url('/images/25.png')" }}>
            <h1 className='absolute  hover:bg-orange-600 hover:text-white rounded-sm bottom-0 p-1 text-center w-full bg-white text-black'>Cajon</h1>
          </div>
          <div className='relative mt-14 ml-12 bg-gray-600 rounded-lg shadow-lg bg-cover bg-center h-[120px] w-[120px]' style={{ backgroundImage: "url('/images/26.png')" }}>
            <h1 className='absolute  hover:bg-orange-600 hover:text-white rounded-sm bottom-0 p-1 text-center w-full bg-white text-black'>Keyboard</h1>
          </div>
          <div className='relative mt-14 ml-12 bg-gray-600 rounded-lg shadow-lg bg-cover bg-center h-[120px] w-[120px]' style={{ backgroundImage: "url('/images/27.png')" }}>
            <h1 className='absolute  hover:bg-orange-600 hover:text-white rounded-sm bottom-0 p-1 text-center w-full bg-white text-black'>Harmonica</h1>
          </div>
          <div className='relative mt-14 ml-12 bg-gray-600 rounded-lg shadow-lg bg-cover bg-center h-[120px] w-[120px]' style={{ backgroundImage: "url('/images/28.png')" }}>
            <h1 className='absolute  hover:bg-orange-600 hover:text-white rounded-sm bottom-0 p-1 text-center w-full bg-white text-black'>Mandolin</h1>
          </div>
          <div className='relative mt-14 ml-12 bg-gray-600 rounded-lg shadow-lg bg-cover bg-center h-[120px] w-[120px]' style={{ backgroundImage: "url('/images/29.png')" }}>
            <h1 className='absolute  hover:bg-orange-600 hover:text-white rounded-sm bottom-0 p-1 text-center w-full bg-white text-black'>Double Bass</h1>
          </div>
          <div className='relative mt-14 ml-12 bg-gray-600 rounded-lg shadow-lg bg-cover bg-center h-[120px] w-[120px]' style={{ backgroundImage: "url('/images/30.png')" }}>
            <h1 className='absolute  hover:bg-orange-600 hover:text-white rounded-sm bottom-0 p-1 text-center w-full bg-white text-black'>Cello</h1>
          </div>
          <div className='relative mt-14 ml-12 bg-gray-600 rounded-lg shadow-lg bg-cover bg-center h-[120px] w-[120px]' style={{ backgroundImage: "url('/images/31.png')" }}>
            <h1 className='absolute  hover:bg-orange-600 hover:text-white rounded-sm bottom-0 p-1 text-center w-full bg-white text-black'>Guitar</h1>
          </div>
        </div>

        <div className='w-full mt-6 ml-2 flex items-center justify-center text-center'>
          <button className='text-white text-center hover:bg-orange-400 bg-orange-600 h-10 rounded-xl' style={{ width: '45rem' }}>Proceed</button>
        </div>
      </div>
    </div>
  );
}

export default PickYourChoice;
