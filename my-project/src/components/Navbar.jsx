import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className={`${!visible && 'hidden'} bg-black w-full z-100 fixed flex flex-col md:flex-row justify-between items-center h-24 px-4 text-white transition-all duration-500`}>
     <h1 className='w-full ml-40 md:w-auto text-3xl font-bold text-white'>MUSIC ACADEMY</h1>
<div>
  <ul className='md:flex-row flex flex-col mt-4 space-x-4 md:mt-0 md:ml-2 ml-24'>
    <li className='p-4 hover:text-blue-500 text-lg'>Home</li>
    <li className='p-4 hover:text-blue-500 text-lg'>Find Your Guru</li>
    <li className='p-4 hover:text-blue-500 text-lg'>How It Works</li>
    <li className='p-4 hover:text-blue-500 '>My Dashboard</li>
  </ul>
</div>

      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>REACT.</h1>
          <li className='p-4 border-b border-gray-600'>Home</li>
          <li className='p-4 border-b border-gray-600'>Find Your Guru</li>
          <li className='p-4 border-b border-gray-600'>How It Works</li>
          <li className='p-4 border-b border-gray-600'>My Dashboard</li>
      </ul>
    </div>
  );
};

export default Navbar;
