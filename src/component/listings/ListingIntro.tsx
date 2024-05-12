import { useState } from 'react';
import { BoltIcon, QuestionMarkCircleIcon, StarIcon } from "@heroicons/react/24/outline";
import { Link } from 'react-router-dom';

const ListingIntro = ({ title }: any) => {
  const [selectedTab, setSelectedTab] = useState('latest');

  const handleTabClick = (tab: any) => {
    setSelectedTab(tab);
  };

  return (
    <div className='relative'>
      <div className='flex justify-between md:mx-32 border-b-[1px] pb-4 mt-12 mx-8'>
        <div className='flex space-x-2'>
          <h2 className='my-auto font-extrabold text-xl'>{title}</h2>
          <QuestionMarkCircleIcon className="h-5 my-auto text-gray-500" />
        </div>
        <div className='flex space-x-4'>
          <div
            className={`flex w-fit m-auto space-x-2 text-xl cursor-pointer ${selectedTab === 'latest' ? 'text-black' : 'text-gray-500'}`}
            onClick={() => handleTabClick('latest')}
          >
            <BoltIcon className='h-5 my-auto' />
            <p className='hidden md:inline'>Latest</p>
          </div>
          <div
            className={`flex m-auto text-xl space-x-2 cursor-pointer ${selectedTab === 'popular' ? 'text-black ' : 'text-gray-500'}`}
            onClick={() => handleTabClick('popular')}
          >
            <StarIcon className='h-5 my-auto' />
            <p className='hidden md:inline'>Popular</p>
          </div>
        </div>
        <Link to='/explore' className='hidden md:inline py-2 px-4 border-[1px] rounded-md font-semibold'>Explore all</Link>
      </div>
    </div>
  );
};

export default ListingIntro;
