import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
function Navbar() {
  return (
    <div className='text-white items-center flex h-24 mx-auto'>
      <h1 className='text-yellow-400 text-3xl p-5'>Navbar</h1>
      <ul className='flex ml-auto mr-16'>
        <li className='p-3 text-xl'>Home</li>
        <li className='p-3 text-xl'>Company</li>
        <li className='p-3 text-xl'>About Us</li>
        <li className='p-3 text-xl'>Careers</li>
        <li className='p-3 text-xl'>Contact Us</li>
      </ul>
    </div>
  );
}
export default Navbar
