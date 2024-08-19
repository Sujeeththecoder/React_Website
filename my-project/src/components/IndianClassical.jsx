import React from 'react';
function IndianClassical() {
  return (
    <div className='min-h-screen bg-gray-400 flex items-center justify-center'>
      <div className='absolute inset-0 backdrop-blur-sm'></div>
      <div className='relative bg-white h-[700px] w-[800px] rounded-lg shadow-md mt-0 mb-8'>
       
        <div className='grid grid-cols-4 gap-x-0 myGridContainer font-sans font-semibold' style={{ gridColumnGap: '6px' }}>
          <div className='relative mt-14 ml-12 bg-gray-600 rounded-lg shadow-lg bg-cover bg-center h-[120px] w-[120px]' style={{ backgroundImage: "url('/images/32.png')" }}>
            <h1 className='absolute hover:bg-orange-600 hover:text-white rounded-sm bottom-0 p-1 text-center w-full bg-white text-black'>Drums</h1>
          </div>
          <div className='relative mt-14 ml-12 bg-gray-600 rounded-lg shadow-lg bg-cover bg-center h-[120px] w-[120px]' style={{ backgroundImage: "url('/images/33.png')" }}>
            <h1 className='absolute hover:bg-orange-600 hover:text-white rounded-sm bottom-0 p-1 text-center w-full bg-white text-black'>Piano</h1>
          </div>
          <div className='relative mt-14 ml-12 bg-gray-600 rounded-lg shadow-lg bg-cover bg-center h-[120px] w-[120px]' style={{ backgroundImage: "url('/images/34.png')" }}>
            <h1 className='absolute hover:bg-orange-600 hover:text-white rounded-sm bottom-0 p-1 text-center w-full bg-white text-black'>Violin</h1>
          </div>
          <div className='relative mt-14 ml-12 bg-gray-600 rounded-lg shadow-lg bg-cover bg-center h-[120px] w-[120px]' style={{ backgroundImage: "url('/images/35.png')" }}>
            <h1 className='absolute hover:bg-orange-600 hover:text-white rounded-sm bottom-0 p-1 text-center w-full bg-white text-black'>Ukulele</h1>
          </div>
          <div className='relative mt-14 ml-12 bg-gray-600 rounded-lg shadow-lg bg-cover bg-center h-[120px] w-[120px]' style={{ backgroundImage: "url('/images/36.png')" }}>
            <h1 className='absolute hover:bg-orange-600 hover:text-white rounded-sm bottom-0 p-1 text-center w-full bg-white text-black'>Cajon</h1>
          </div>
          <div className='relative mt-14 ml-12 bg-gray-600 rounded-lg shadow-lg bg-cover bg-center h-[120px] w-[120px]' style={{ backgroundImage: "url('/images/37.png')" }}>
            <h1 className='absolute hover:bg-orange-600 hover:text-white rounded-sm bottom-0 p-1 text-center w-full bg-white text-black'>Keyboard</h1>
          </div>
          <div className='relative mt-14 ml-12 bg-gray-600 rounded-lg shadow-lg bg-cover bg-center h-[120px] w-[120px]' style={{ backgroundImage: "url('/images/38.png')" }}>
            <h1 className='absolute hover:bg-orange-600 hover:text-white rounded-sm bottom-0 p-1 text-center w-full bg-white text-black'>Harmonica</h1>
          </div>
          <div className='relative mt-14 ml-12 bg-gray-600 rounded-lg shadow-lg bg-cover bg-center h-[120px] w-[120px]' style={{ backgroundImage: "url('/images/39.png')" }}>
            <h1 className='absolute hover:bg-orange-600 hover:text-white rounded-sm bottom-0 p-1 text-center w-full bg-white text-black'>Mandolin</h1>
          </div>
        </div>
        <div className='w-full mt-6 ml-2 flex items-center justify-center text-center'>
          <button className='text-white text-center hover:bg-orange-400 bg-orange-600 h-10 rounded-xl' style={{ width: '45rem' }}>Proceed</button>
        </div>
      </div>
    </div>
  );
}

export default IndianClassical;
