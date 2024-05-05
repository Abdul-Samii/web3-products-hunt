import { useState, useRef, useEffect } from 'react';

const Navbar = () => {
	const [showSidebar, setShowSidebar] = useState(false);
	const sidebarRef = useRef<any>(null);

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
		<nav className='w-full bg-white shadow-sm flex flex-wrap items-center md:justify-between px-4 py-2 md:py-4'>
			<div className='flex items-center'>
				<p className='text-lg font-semibold mr-6'>LOGO</p>
				<div className='hidden md:flex space-x-4'>
					<p>Explore</p>
					<p>Leaderboard</p>
					<p>Synergy</p>
					<p>API</p>
				</div>
			</div>

			<div className='md:flex md:items-center md:justify-end space-x-2'>
				<input
					placeholder='Search here'
					className='border-[1px] p-2 md:w-96 w-56 rounded-md bg-gray-100 outline-none'
				/>
				<div className='md:flex space-x-2 hidden'>
					<p className='bg-black p-2 text-white rounded-md w-24 text-center'>About Us</p>
					<p className='bg-black p-2 text-white rounded-md w-24 text-center'>Signup</p>
				</div>
			</div>

				{/* Menu icon */}
			<div className='md:hidden cursor-pointer ml-4' onClick={toggleSidebar}>
				<svg className="h-6 w-6 text-black" viewBox="0 0 32 32">
					<path d="M16 31C7.729 31 1 24.271 1 16S7.729 1 16 1s15 6.729 15 15-6.729 15-15 15zm0-28C8.832 3 3 8.832 3 16s5.832 13 13 13 13-5.832 13-13S23.168 3 16 3z"/>
					<circle cx="16" cy="11.368" r="3.368"/>
					<path d="M20.673 24h-9.346c-.83 0-1.502-.672-1.502-1.502v-.987a5.404 5.404 0 0 1 5.403-5.403h1.544a5.404 5.404 0 0 1 5.403 5.403v.987c0 .83-.672 1.502-1.502 1.502z"/>
				</svg>
			</div>
			<div className='md:hidden cursor-pointer ml-4' onClick={toggleSidebar}>
				<svg
					className='h-6 w-6 text-black'
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					stroke='currentColor'
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
				<div ref={sidebarRef} className='md:hidden absolute inset-y-0 left-0 z-50 bg-black text-white w-64'>
					<p className='px-4 py-4 hover:bg-gray-800'>Explore</p>
					<p className='px-4 py-4 hover:bg-gray-800'>Leaderboard</p>
					<p className='px-4 py-4 hover:bg-gray-800'>Synergy</p>
					<p className='px-4 py-4 hover:bg-gray-800'>API</p>
					<p className='px-4 py-4 hover:bg-gray-800'>About Us</p>
					<p className='px-4 py-4 hover:bg-gray-800'>Signup</p>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
