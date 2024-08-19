import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import IndianClassical from './IndianClassical';
import OtherComponent from './OtherComponent';
import Western from './Western';

function PickYourChoice() {
  const [selectedChoice, setSelectedChoice] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const choice = params.get('choice');
    if (choice) {
      setSelectedChoice(choice);
    }
  }, [location]);

  const navigateToChoice = (choice) => {
    setSelectedChoice(choice);
    navigate(`?choice=${choice}`);
  };

  return (
    <div className="min-h-screen bg-gray-400 flex flex-col items-center">
      {/* Navbar Section */}
      <div className="bg-white w-[800px] top-38 bottom-0 shadow-md z-10">
        <div className="max-w-screen-xl mx-auto p-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Pick your choice</h1>
          <div className="flex gap-x-6 text-lg font-medium">
            <p onClick={() => navigateToChoice('Western')} className="cursor-pointer">Western</p>
            <p onClick={() => navigateToChoice('IndianClassical')} className="cursor-pointer">Indian Classical</p>
            <p onClick={() => navigateToChoice('Others')} className="cursor-pointer">Others</p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="mt-4 w-full flex items-center justify-center">
        <div className="relative bg-white h-[700px] w-[800px] rounded-lg shadow-md">
          {selectedChoice === 'IndianClassical' && <IndianClassical />}
          {selectedChoice === 'Others' && <OtherComponent />}
          {selectedChoice === 'Western' && <Western />}
          {!selectedChoice && (
            <div className="p-8 text-center">
              <h2 className="text-xl font-semibold">Please select a category from the above options.</h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PickYourChoice;
