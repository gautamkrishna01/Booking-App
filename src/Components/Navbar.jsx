import React from 'react';

const Navbar = () => {
  return (
    <>
      <div className='h-[50px] bg-[#003B94] flex justify-center items-center'>
        <div className='w-[100%] max-w-[1024px] text-white flex justify-between'>
          <span className='font-bold '>Gautam Booking</span>
          <div className='flex gap-[15px]'>
            <button className='ml-[20px]  cursor-pointer bg-white text-[#003B94] px-[10px] py-[7px]'>
              Register
            </button>
            <button className='ml-[20px]  cursor-pointer bg-white text-[#003B94] px-[10px] py-[7px]'>
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
