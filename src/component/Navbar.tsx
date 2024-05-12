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
import { Link } from 'react-router-dom';
import { SearchContext } from '../context/SearchContext';

const Navbar = () => {
	const [showSidebar, setShowSidebar] = useState(false);
	const sidebarRef = useRef<any>(null);

	const { setSearchValue, searchValue } = useContext(SearchContext);

	const handleSearchChange = (event: any) => {
    setSearchValue(event.target.value);
  };

	const toggleSidebar = () => {
		setShowSidebar(!showSidebar);
	};

	const handleClickOutside = (event: any) => {
		if (sidebarRef.current && !sidebarRef.current?.contains(event.target)) {
			setShowSidebar(false);
		}
	};

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	return (
		<nav className='w-full text-white bg-primarydark shadow-sm flex items-center md:justify-between px-4 py-2 md:py-4 md:px-8'>
			<div className={`flex items-center ${searchValue.length > 0 && 'md:hidden'}`}>
				<Link to='/' className='text-lg font-semibold mr-6'>LOGO</Link>
				<div className='hidden md:flex space-x-4'>
					<Link to='/trending' className='hover:text-red-500 cursor-pointer'>Trending</Link>
					<Link to='/gaming' className='hover:text-red-500 cursor-pointer'>Gaming</Link>
					<Link to='/infrastructure' className='hover:text-red-500 cursor-pointer'>Infrastructure</Link>
					<Link to='/recent-projects' className='hover:text-red-500 cursor-pointer'>Recently Added</Link>
				</div>
			</div>

			<div className={`md:flex md:items-center md:justify-end space-x-2 ${searchValue.length > 0 ? 'md:w-full' : 'w-1/2'}`}>
				<input
					placeholder='Search here'
					value={searchValue}
					onChange={handleSearchChange}
					className={`border-[1px] p-1 md:p-2 md:w-full w-56 text-black rounded-md bg-gray-100 outline-none ${searchValue.length > 0 && 'md:rounded-full md:p-3'}`}
				/>
				<select className={`hidden md:inline-block border-[1px] py-2 px-1 text-black outline-none rounded-md ${searchValue.length == 0 && 'md:hidden'}`}>
					<option>Popularity</option>
					<option>Most Recent</option>
					<option>Old</option>
					<option>Stable</option>
				</select>
				<p className='bg-secondarylight p-2 rounded-md hidden md:inline'>
					<BellAlertIcon className='h-6 text-black bell-animation'/>
				</p>
				<div className='md:flex space-x-2 hidden'>
					<p className='w-24 text-center m-auto'>About Us</p>
					<p className='bg-secondarylight text-black p-2 rounded-md w-24 text-center'>Signup</p>
				</div>
			</div>

				{/* Menu icon */}
			<div className='md:hidden flex space-x-2 ml-auto cursor-pointer'>
				<UserCircleIcon className='h-6' />
			{/* </div>
			<div className='md:hidden cursor-pointer ml-4' onClick={toggleSidebar}> */}
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
				<div ref={sidebarRef} className='md:hidden absolute inset-y-0 left-0 z-50 bg-secondarydark text-white w-64'>
					<p className='px-4 py-4 hover:bg-primarydark w-full flex'><p className='my-auto mx-2'><ArrowTrendingUpIcon className='h-4' /></p>Trending</p>
					<p className='px-4 py-4 hover:bg-primarydark w-full flex'><p className='my-auto mx-2'><PuzzlePieceIcon className='h-4' /></p>Gaming</p>
					<p className='px-4 py-4 hover:bg-primarydark w-full flex'><p className='my-auto mx-2'><BuildingOffice2Icon className='h-4' /></p>Infrastructure</p>
					<p className='px-4 py-4 hover:bg-primarydark w-full flex'><p className='my-auto mx-2'><ComputerDesktopIcon className='h-4' /></p>Hardware</p>
					<p className='px-4 py-4 hover:bg-primarydark w-full flex'><p className='my-auto mx-2'><ClipboardDocumentListIcon className='h-4' /></p>Recently Added</p>
					<p className='px-4 py-4 hover:bg-primarydark w-full flex'><p className='my-auto mx-2'><GlobeAltIcon className='h-4' /></p>About Us</p>
					<p className='px-4 py-4 hover:bg-primarydark w-full flex'><p className='my-auto mx-2'><BellAlertIcon className='h-4' /></p>Notifications</p>
					<p className='px-4 py-4 hover:bg-primarydark w-full flex'><p className='my-auto mx-2'><ArrowUturnRightIcon className='h-4' /></p>Signup</p>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
