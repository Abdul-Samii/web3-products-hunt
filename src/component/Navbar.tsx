import {
  ArrowTrendingUpIcon,
  ArrowUturnRightIcon,
  BellAlertIcon,
  BuildingOffice2Icon,
  ClipboardDocumentListIcon,
  ComputerDesktopIcon,
  GlobeAltIcon,
  PuzzlePieceIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import { useState, useRef, useEffect, useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { SearchContext } from '../context/SearchContext';

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [changeColor, setChangeColor] = useState(false);
  const sidebarRef = useRef<any>(null);

  const location = useLocation();
  const navigate = useNavigate();

  const { setSearchValue, searchValue } = useContext(SearchContext);

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const handleClickOutside = (event: any) => {
    if (sidebarRef.current && !sidebarRef.current?.contains(event.target)) {
      setShowSidebar(false);
    }
  };

  const clearSearch = () => setSearchValue('');

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (
      (window.location.pathname !== '/web3-products-hunt' &&
        window.location.pathname !== '/web3-products-hunt/') ||
      searchValue
    ) {
      setChangeColor(true);
      if (searchValue) navigate('/web3-products-hunt');
    } else {
      setChangeColor(false);
    }
  }, [location.pathname, searchValue]);

  return (
    <nav
      className={`w-full shadow-sm flex items-center md:justify-between px-4 py-2 md:py-4 md:px-8 ${
        changeColor && 'bg-[#3341BD] text-white'
      }`}
    >
      <div
        className={`flex items-center  ${searchValue.length > 0 && 'md:hidden'}`}
      >
        <Link
          to='/web3-products-hunt'
          className='text-lg font-bold mr-2 text-secondarydark'
        >
          <span className='text-secondarydark font-thin'>YOUR</span>LOGO
        </Link>
        <div className='border-r-2 h-6 bg-red-400 mr-2' />
        <div className='hidden md:flex space-x-4'>
          <p
            onClick={() => handleSearchChange('Trending')}
            className='hover:text-[#3341BD] cursor-pointer'
          >
            Trending
          </p>
          <p
            onClick={() => handleSearchChange('Gaming')}
            className='hover:text-[#3341BD] cursor-pointer'
          >
            Gaming
          </p>
          <p
            onClick={() => handleSearchChange('Infrastructure')}
            className='hover:text-[#3341BD] cursor-pointer'
          >
            Infrastructure
          </p>
          <p
            onClick={() => handleSearchChange('Recent projects')}
            className='hover:text-[#3341BD] cursor-pointer'
          >
            Recently Added
          </p>
        </div>
      </div>

      <div
        className={`md:flex md:items-center md:justify-end space-x-2 ${
          searchValue.length > 0 ? 'md:w-full' : 'w-1/2'
        }`}
      >
        <div className='relative w-full flex'>
          <input
            placeholder='Search here'
            value={searchValue}
            onChange={(e) => handleSearchChange(e.target.value)}
            className={`border-[1px] p-1 text-sm md:p-2 md:w-full w-56 text-black rounded-md bg-gray-100 outline-none ${
              searchValue.length > 0 && 'md:rounded-full md:p-3'
            }`}
          />
          {searchValue && (
            <p
              onClick={clearSearch}
              className='text-nowrap absolute right-6 underline text-secondarydark cursor-pointer text-xs top-[30%]'
            >
              Clear search
            </p>
          )}
        </div>
        <p className='bg-secondarylight p-2 rounded-md hidden md:inline'>
          <BellAlertIcon className='h-6 text-black bell-animation' />
        </p>
        <div className='md:flex space-x-2 hidden'>
          <p className='w-24 text-center m-auto'>About Us</p>
          <Link
            onClick={clearSearch}
            to='/web3-products-hunt/auth'
            className='bg-secondarylight text-black p-2 rounded-md w-24 text-center'
          >
            Signup
          </Link>
        </div>
      </div>

      {/* Menu icon */}
      <div className='md:hidden flex space-x-2 ml-auto cursor-pointer'>
        <UserCircleIcon className='h-6' />
        <svg
          className='h-6 w-6 text-secondarylight'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          onClick={toggleSidebar}
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M4 6h16M4 12h16m-7 6h7'
          />
        </svg>
      </div>

      {/* Sidebar */}
      {showSidebar && (
        <div
          ref={sidebarRef}
          className='md:hidden absolute inset-y-0 left-0 z-50 bg-secondarydark text-white w-64'
        >
          <p
            onClick={() => handleSearchChange('Trending')}
            className='px-4 py-4 hover:bg-primarydark w-full flex'
          >
            <p className='my-auto mx-2'>
              <ArrowTrendingUpIcon className='h-4' />
            </p>
            Trending
          </p>
          <p
            onClick={() => handleSearchChange('Gaming')}
            className='px-4 py-4 hover:bg-primarydark w-full flex'
          >
            <p className='my-auto mx-2'>
              <PuzzlePieceIcon className='h-4' />
            </p>
            Gaming
          </p>
          <p
            onClick={() => handleSearchChange('Infrastructure')}
            className='px-4 py-4 hover:bg-primarydark w-full flex'
          >
            <p className='my-auto mx-2'>
              <BuildingOffice2Icon className='h-4' />
            </p>
            Infrastructure
          </p>
          <p
            onClick={() => handleSearchChange('Hardware')}
            className='px-4 py-4 hover:bg-primarydark w-full flex'
          >
            <p className='my-auto mx-2'>
              <ComputerDesktopIcon className='h-4' />
            </p>
            Hardware
          </p>
          <p
            onClick={() => handleSearchChange('Recent projects')}
            className='px-4 py-4 hover:bg-primarydark w-full flex'
          >
            <p className='my-auto mx-2'>
              <ClipboardDocumentListIcon className='h-4' />
            </p>
            Recently Added
          </p>
          <Link
            to='/web3-products-hunt/about'
            className='px-4 py-4 hover:bg-primarydark w-full flex'
          >
            <p className='my-auto mx-2'>
              <GlobeAltIcon className='h-4' />
            </p>
            About Us
          </Link>
          <Link
            to='/web3-products-hunt/notifications'
            className='px-4 py-4 hover:bg-primarydark w-full flex'
          >
            <p className='my-auto mx-2'>
              <BellAlertIcon className='h-4' />
            </p>
            Notifications
          </Link>
          <Link
            onClick={clearSearch}
            to='/web3-products-hunt/auth'
            className='px-4 py-4 hover:bg-primarydark w-full flex'
          >
            <p className='my-auto mx-2'>
              <ArrowUturnRightIcon className='h-4' />
            </p>
            Signup
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
