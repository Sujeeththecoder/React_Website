import React from 'react';

function WhyChooseUs() {
  return (
    <div className="mt-28 pt-4  mb-20 flex flex-col items-center justify-center">
        <hr className="w-full border-0 bg-blue-gray-100 h-px mb-6" />
      <div className="text-white font-bold text-2xl text-center mt-16 mb-10">Why should you choose us?</div>
      
      <div className="flex flex-col items-center space-y-16">
        <div className="flex items-center gap-20">
          <div className="flex items-center gap-0">
            <img src="./images/4.svg" alt="Free Session" className="h-24 w-24" />
            <div className="ml-4 ">
              <h1 className="font-extrabold text-xl mb-1">Focus only on teaching</h1>
              <p className="text-base font-medium w-60">
                Get a ready-to-use teaching platform with marketing and billing features at zero setup cost
              </p>
            </div>
          </div>

          <div className="flex items-center gap-0 ml-20"> 
            <img src="./images/1.svg" alt="Free Session" className="h-24 w-24" />
            <div className="ml-4">
              <h1 className="font-extrabold text-xl mb-1">Be your own boss</h1>
              <p className="text-base font-medium w-60">
              Get access to a wide member base spread worldwide, from the comfort of your home
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-20">
          <div className="flex items-center gap-0">
            <img src="./images/2.svg" alt="Free Session" className="h-24 w-24" />
            <div className="ml-4">
              <h1 className="font-extrabold text-xl mb-1">Teach anywhere, anytime</h1>
              <p className="text-base font-medium w-60">
              Receive complete payments for scheduled classes irrespective of the members' payments
              </p>
            </div>
          </div>

          <div className="flex items-center gap-0 ml-20"> 
            <img src="./images/3.svg" alt="Free Session" className="h-24 w-24" />
            <div className="ml-4 ">
              <h1 className="font-extrabold text-xl mb-1">Guaranteed payments</h1>
              <p className="text-base font-medium w-60">
                Build your profile, showcase your skills, and decide your fee structure
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
