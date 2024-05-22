import React from 'react';

function Form() {
  return (
    <div className='flex items-center justify-center h-screen mt-20'>
      <div className="max-w-[960px] grid grid-cols-2 items-center gap-20 p-5">
        <div className='relative'>
            <h1 className='text-white mb-6 text-5xl font-bold'>book your <span style={{ color: 'orange' }}>FREE</span> session</h1>
          <img src="./images/FreeSession.png" alt="" />
          <h1 className='text-white text-xl text-center items-center'>Book your first session with us, absolutely FREE</h1>
        </div>
        <div>
          <form method="POST">
            <div className='flex flex-col text-white space-y-1'>
              <label>Name:</label>
              <input type="text" className='py-2 px-3 rounded-xl text-black'/>
              <br />
              <label>Email Address:</label>
              <input type="email" className='py-2 px-3 rounded-xl text-black'/>
              <br />
              <label>Phone Number:</label>
              <input type="tel" className='py-2 px-3 rounded-xl text-black'/>
              <br />
              <label>City:</label>
              <input type="text" className='py-2 px-3  rounded-xl text-black'/>
              <br />
              <label>Your Instrument:</label>
              <select className='py-2 px-3 rounded-xl text-black'>
                <option value="BTW" className='text-black'>By the way</option>
                <option value="TTYL" className=' text-black'>Talk to you later</option>
                <option value="TBH" className='text-black'>To be honest</option>
                <option value="IDK" className='text-black'>I don’t know</option>
              </select>
              <br />
              <button type="submit" className='text-white bg-orange-600 py-2 px-4 rounded-xl '>Book Now</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
