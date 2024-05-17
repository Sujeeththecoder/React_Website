import React from 'react';

function Video() {
  return (
    <div className="flex justify-center items-center h-screen bg-black mt-20 pt-30">
      <video controls className="w-3/4 h-auto mt-12">
        <source src="/videos/6671635-uhd_3840_2160_25fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default Video;
