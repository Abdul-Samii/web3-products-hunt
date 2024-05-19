import React from 'react';
import logo from '../../assets/images/AI.jpeg';

const Overview: React.FC = () => {
  return (
    <>
      <p className='mt-8 text-sm md:text-base lg:text-lg leading-relaxed'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus fugit quam nemo distinctio quis inventore accusantium laboriosam incidunt fuga culpa veritatis, magnam modi voluptatum vitae quisquam corporis! Veniam, dolorem non!
      </p>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12'>
        <img src={logo} className='rounded-md w-full md:w-auto' />
        <img src={logo} className='rounded-md w-full md:w-auto' />
        <img src={logo} className='rounded-md w-full md:w-auto' />
      </div>
    </>
  );
};

export default Overview;
