import React from 'react';
import { BiBed } from 'react-icons/bi';
import { MdFlight } from 'react-icons/md';
import { AiFillCar } from 'react-icons/ai';
import { BsFillTaxiFrontFill } from 'react-icons/bs';
const Header = () => {
  return (
    <>
      <div className='header'>
        <div className='headerlist'>
          <div className='headerlistitems'>
            <BiBed />
            <span>Stays</span>
          </div>
          <div className='headerlistitems'>
            <MdFlight />
            <span>flight</span>
          </div>
          <div className='headerlistitems'>
            <AiFillCar />
            <span>Car Rental</span>
          </div>
          <div className='headerlistitems'>
            <BiBed />
            <span>Attraction</span>
          </div>
          <div className='headerlistitems'>
            <BsFillTaxiFrontFill />
            <span>Airport Taxi</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
