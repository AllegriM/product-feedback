import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import mobileBanner from '../../assets/suggestions/mobile/background-header.png';
import Filters from '../Filters/Filters';
import HamburguerClose from '../Icons/HamburguerClose';
import HamburguerIcon from '../Icons/HamburguerIcon';

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <nav className="sticky top-0 mx-auto flex justify-center z-50">
        <div className="absolute flex items-center justify-between h-full w-10/12">
          <Link to={'/'}>
            <div className="text-left">
              <h4 className="font-bold">Frontend Mentor</h4>
              <p className="">FeedBack Board</p>
            </div>
          </Link>
          {!isOpen ? (
            <button onClick={() => setIsOpen(!isOpen)}>
              <HamburguerIcon />
            </button>
          ) : (
            <button onClick={() => setIsOpen(!isOpen)}>
              <HamburguerClose />
            </button>
          )}
        </div>
        <img src={mobileBanner} className="" alt="bannerImage" />
      </nav>
      <Filters isOpen={isOpen} />
    </>
  );
};

export default NavBar;
