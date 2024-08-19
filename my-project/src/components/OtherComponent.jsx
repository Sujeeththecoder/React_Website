import React from 'react';

function OtherComponent() {
  return (
    <div className='min-h-screen bg-gray-400 flex items-center justify-center'>
      <div className='absolute inset-0 backdrop-blur-sm'></div>
      <div className='relative bg-white h-[700px] w-[800px] rounded-lg shadow-md mt-0 mb-8'>
        <div className='grid grid-cols-4 gap-x-0 myGridContainer font-sans font-semibold' style={{ gridColumnGap: '6px' }}>
          <div className='relative mt-14 ml-12 bg-gray-600 rounded-lg shadow-lg bg-cover bg-center h-[120px] w-[120px]' style={{ backgroundImage: "url('/images/39.png')" }}>
            <h1 className='absolute hover:bg-orange-600 hover:text-white rounded-sm bottom-0 p-1 text-center w-full bg-white text-black'>Guitar</h1>
          </div>
          <div className='relative mt-14 ml-12 bg-gray-600 rounded-lg shadow-lg bg-cover bg-center h-[120px] w-[120px]' style={{ backgroundImage: "url('/images/40.png')" }}>
            <h1 className='absolute hover:bg-orange-600 hover:text-white rounded-sm bottom-0 p-1 text-center w-full bg-white text-black'>Flute</h1>
          </div>
          <div className='relative mt-14 ml-12 bg-gray-600 rounded-lg shadow-lg bg-cover bg-center h-[120px] w-[120px]' style={{ backgroundImage: "url('/images/41.png')" }}>
            <h1 className='absolute hover:bg-orange-600 hover:text-white rounded-sm bottom-0 p-1 text-center w-full bg-white text-black'>Tabla</h1>
          </div>
          <div className='relative mt-14 ml-12 bg-gray-600 rounded-lg shadow-lg bg-cover bg-center h-[120px] w-[120px]' style={{ backgroundImage: "url('/images/42.png')" }}>
            <h1 className='absolute hover:bg-orange-600 hover:text-white rounded-sm bottom-0 p-1 text-center w-full bg-white text-black'>Sitar</h1>
          </div>
          <div className='relative mt-14 ml-12 bg-gray-600 rounded-lg shadow-lg bg-cover bg-center h-[120px] w-[120px]' style={{ backgroundImage: "url('/images/43.png')" }}>
            <h1 className='absolute hover:bg-orange-600 hover:text-white rounded-sm bottom-0 p-1 text-center w-full bg-white text-black'>Dholak</h1>
          </div>
          <div className='relative mt-14 ml-12 bg-gray-600 rounded-lg shadow-lg bg-cover bg-center h-[120px] w-[120px]' style={{ backgroundImage: "url('/images/44.png')" }}>
            <h1 className='absolute hover:bg-orange-600 hover:text-white rounded-sm bottom-0 p-1 text-center w-full bg-white text-black'>Mandolin</h1>
          </div>
          <div className='relative mt-14 ml-12 bg-gray-600 rounded-lg shadow-lg bg-cover bg-center h-[120px] w-[120px]' style={{ backgroundImage: "url('/images/45.png')" }}>
            <h1 className='absolute hover:bg-orange-600 hover:text-white rounded-sm bottom-0 p-1 text-center w-full bg-white text-black'>Saxophone</h1>
          </div>
          <div className='relative mt-14 ml-12 bg-gray-600 rounded-lg shadow-lg bg-cover bg-center h-[120px] w-[120px]' style={{ backgroundImage: "url('/images/46.png')" }}>
            <h1 className='absolute hover:bg-orange-600 hover:text-white rounded-sm bottom-0 p-1 text-center w-full bg-white text-black'>Cello</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OtherComponent;
