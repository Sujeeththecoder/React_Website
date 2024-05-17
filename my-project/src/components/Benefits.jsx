import React from 'react';

function Benefits() {
  return (
    <div className="ml-10 flex justify-between items-start">
      
      <div className="w-1/6 flex flex-col items-center" style={{ marginRight: '109px', marginLeft: '123px' }}>
        <img src="/images/guitar teaching small.jpg" alt="Benefit 1" className="w-full" />
        <div className="mt-4 text-center h-32 flex flex-col justify-center">
          <h1 className="text-xl font-bold text-white">One-on-One sessions</h1>
          <p className="text-sm mt-2 text-white">Engage with your instructor in one-on-one sessions and distill the maximum from personalized classes</p>
        </div>
      </div>

      <div className="w-1/6 flex flex-col items-center" style={{ marginRight: '-5px', marginLeft: '-5px' }}>
        <img src="/images/learning guitar small.jpg" alt="Benefit 2" className="w-full" />
        <div className="mt-4 text-center h-32 flex flex-col justify-center">
          <h1 className="text-xl font-bold text-white">All-time access to recordings</h1>
          <p className="text-sm mt-2 text-white">Return to recorded sessions anytime, anywhere to maximize your practice and improve your performances</p>
        </div>
      </div>

      <div className="w-1/6 flex flex-col items-center" style={{ marginRight: '133px', marginLeft: '110px' }}>
        <img src="/images/9.jpg" alt="Benefit 3" className="w-full" />
        <div className="mt-4 text-center h-32 flex flex-col justify-center">
          <h1 className="text-xl font-bold text-white">Special Instructors for kids</h1>
          <p className="text-sm mt-2 text-white">We provide special instructors for kids who have enough years of experience in practicing and teaching music</p>
        </div>
      </div>

    </div>
  );
}

export default Benefits;
