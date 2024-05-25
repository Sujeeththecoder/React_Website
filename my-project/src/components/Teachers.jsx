import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Teachers() {
  return (
    <div>
      <div className='text-white mt-20 items-center text-center'>
        <p className='text-lg'>Featured Teachers</p>
        <br />
        <h3 className='text-3xl font-bold'>Check out our best performing Instructors</h3>
        <div className='mt-10'>
          <button className='text-lg bg-blue-700 text-white py-1 px-4 border border-blue-700 hover:border-transparent rounded mr-4'>
            Explore More
          </button>
          <button className='text-lg bg-white text-black py-1 px-4 border border-white hover:border-transparent rounded'>
            Book A Free Session Now
          </button>
        </div>
      </div>
      <App />
    </div>
  );
}

function App() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const data = [
    {
      name: 'John Morgan',
      img: '/images/5.jpg',
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      name: 'Ellie Anderson',
      img: '/images/5.jpg',
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      name: 'Nia Adebayo',
      img: '/images/5.jpg',
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      name: 'Rigo Louie',
      img: '/images/5.jpg',
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      name: 'Mia Williams',
      img: '/images/5.jpg',
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  ];

  return (
    <div className='w-3/4 m-auto'>
      <div className='mt-20'>
        <Slider {...settings}>
          {data.map((d) => (
            <div key={d.name} className='bg-white h-[450px] text-black rounded-xl'>
              <div className='h-56 bg-indigo-500 flex justify-center items-center rounded-t-xl'>
                <img src={d.img} alt={d.name} className='h-44 w-44 rounded-full' />
              </div>
              <div className='flex flex-col items-center justify-center gap-4 p-4'>
                <p className='text-xl font-semibold'>{d.name}</p>
                <p className='text-center'>{d.review}</p>
                <button className='bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl'>
                  
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Teachers;
