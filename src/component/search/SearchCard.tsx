import { BiSolidUpArrow } from 'react-icons/bi';

import logo from '../../assets/images/AI.jpeg';

const SearchCard = ({ project }: any) => {
  const { projectName, description, address, tags, votes } = project;
  const truncatedAddress = address.substring(0, 6) + '.....' + address.substring(address.length - 6);

  return (
      <div className='flex justify-between relative md:w-full py-2 md:py-5 bg-white shadow-sm border-[1px] rounded-md pl-4 md:ml-44 mt-12 mb-12'>
        <img src={logo} className='md:h-26 h-28 md:w-36 w-28 rounded-md border-[1px] p-2' />
        <div className='space-y-1 ml-4 w-44 flex-grow'>
          <div className='flex space-x-2'>
            <h3 className='text-lg md:text-2xl font-bold'>{projectName}</h3>
            <p className='md:text-2xl text-gray-400 font-bold'>#</p>
          </div>
          <p className='truncate w-1/2 text-xs'>{description}</p>
          <p className='text-xs'>{truncatedAddress}</p>
          <div className='flex space-x-2 md:pt-4'>
            <p className='px-2 py-1 md:font-semibold rounded-md bg-secondarylight text-xs'>{tags[0]}</p>
            <p className='px-2 py-1 md:font-semibold rounded-md bg-secondarylight text-xs'>{tags[1]}</p>
          </div>
        </div>
        <div className='absolute right-6 md:right-12 mt-12 border-[1px] flex md:px-6 px-2 md:py-2 py-1 rounded-sm md:rounded-md text-gray-500 space-x-2'>
          <BiSolidUpArrow className='md:h-4 h-2 md:w-4 w-2 my-auto' />
          <p className='text-xs md:text-sm'>{votes}</p>
        </div>
      </div>
  )
}

export default SearchCard;
