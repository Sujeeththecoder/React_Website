import React from 'react'

function MusicalFraternity() {
  return (
    <div>
       <hr className="w-full border-0 bg-blue-gray-100 h-px mb-6" />
      <div className='text-white flex items-center justify-center flex-col mt-20 font-bold gap-1'>
        <h className='font-bold text-2xl font-sans mb-3'>We exist for the entire musical fraternity!</h>
        <p className='text-sm font-bold'>We will enable and empower anyone willing to share their gift of music with everyone</p>
      </div>
      <div className=''>
        
        <div className="flex items-center justify-center gap-x-36 mt-14">
    <img src="/images/ProfessionalTeacher.svg" alt="" className="w-60 h-60"/>
    <span className="text-white ml-4">
        <h1 className="text-xl mb-2 font-bold text-center">Professional</h1>
        <p className='w-72 text-sm text-center'>If you are formally trained in the musical arts and wish to impart your knowledge with others, you belong here</p>
    </span>
</div>
<div className="flex items-center justify-center gap-x-36 text-white">
  <div>
<h1 className="text-xl font-bold mb-2 text-center">Search</h1>
        <p className='w-72 text-sm text-center'>If you have gained your skills by performing everywhere and want to extend your experience to others, you belong here</p>
        </div>
        
    <span className=" ml-4">
    <img src="/images/Performer.svg" alt="" className="w-60 h-60"/>
    </span>
</div>
<div className="flex items-center justify-center gap-x-36 ">
    <img src="/images/Passionate.svg" alt="" className="w-60 h-60"/>
    <span className="text-white ml-4">
        <h1 className="text-xl mb-2 font-bold text-center">Passionate</h1>
        <p className='w-72 text-sm text-center '>If you are finally picking up your life long musical ambition and wish to support yourself alongside, you belong here</p>
        
    </span>
</div>

      </div>
    </div>
  )
}

export default MusicalFraternity
