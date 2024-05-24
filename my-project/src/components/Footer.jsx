import React from 'react';

function Footer() {
  return (
    <div className='text-white bg-gray-700 py-20 px-20 flex'>
      <div>
        <div>
          <h1 className='font-bold'>Dhunguru</h1>
          <p className='text-sm'>A music revolution,born to break geographical barriers</p>
          <p>Socials</p>
        </div>
      </div>
      <div className='ml-20'> 
        <div>
          <h1 className='font-bold text-sm'>SITE</h1>
          <p>About</p>
          <p>How it works</p>
          <p>Become a Guru</p>
          <p>FAQs</p>
          <p>Terms of use (students)</p>
          <p>Terms of use (teachers)</p>
          <p>Privacy policy</p>
          <p>Refund Policy</p>
          <p>Contact</p>
        </div>
      </div>
      <div className='ml-20'>
        <div>
            <h1 className='text-sm font-bold'>SUBJECTS/INSTRUMENTS</h1>
            <p>Guitar</p>
            <p>Piano</p>
            <p>Violin</p>
            <p>Drums</p>
            <p>Flute</p>
            <p>more</p>
        </div>
      </div>
      <div className='ml-20'>
       <div className='gap-1'>
  <h1 className='text-sm font-bold'>SIGN UP TO OUR NEWSLETTER</h1>
  <input type="text" placeholder="Email Address" class="mt-1 py-2 px-4 rounded-md w-full text-black" />
  <p className='mt-1 text-sm'>*Subscribe to our newsletter to receive early discount offers, updates and new products info.</p>
</div>

      </div>
    </div>
  )
}

export default Footer;
