import React from 'react'

function SimpleSteps() {
  return (
    <div>
        <div className='text-white mt-20 items-center text-center'>
      <p className='text-lg'>Here's all it takes</p>
        <br />
        <h3 className='text-3xl font-bold'>Follow these three simple steps to kickstart your musical quest!</h3>
        </div>
        <div className="ml-10 flex justify-between items-start mt-10">
      
      <div className="w-1/6 flex flex-col items-center" style={{ marginRight: '109px', marginLeft: '123px' }}>
        <img src="/images/search.jpg" alt="Benefit 1" className="w-full" />
        <div className="mt-4 text-center h-32 flex flex-col justify-center">
          <h1 className="text-xl font-bold text-white">Search</h1>
          <p className="text-sm mt-2 text-white">Punch in your requirements and match with the best instructor out there in the market</p>
        </div>
      </div>

      <div className="w-1/6 flex flex-col items-center" style={{ marginRight: '-5px', marginLeft: '-5px' }}>
        <img src="/images/Schedule.jpg" alt="Benefit 2" className="w-full" />
        <div className="mt-4 text-center h-32 flex flex-col justify-center">
          <h1 className="text-xl font-bold text-white">Schedule</h1>
          <p className="text-sm mt-2 text-white">Talk to your instructor, decide on a convenient time, and join in from anywhere in the world</p>
        </div>
      </div>

      <div className="w-1/6 flex flex-col items-center" style={{ marginRight: '133px', marginLeft: '110px' }}>
        <img src="/images/Study.jpg" alt="Benefit 3" className="w-full" />
        <div className="mt-4 text-center h-32 flex flex-col justify-center">
          <h1 className="text-xl font-bold text-white">Study</h1>
          <p className="text-sm mt-2 text-white">Learn from the best and excel at your skills through carefully guided one-on-one sessions

</p>
        </div>
      </div>

    </div>
    </div>
  )
}

export default SimpleSteps
