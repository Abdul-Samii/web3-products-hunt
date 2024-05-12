import { BiSolidUpArrow } from 'react-icons/bi';
import logo from '../../assets/images/AI.jpeg';

const SearchCard = ({ project, className }: any) => {
  const { projectName, description, address, tags, votes } = project;
  const truncatedAddress = address.substring(0, 6) + '.....' + address.substring(address.length - 6);

  return (
    <div className={`flex md:flex-row relative py-2 md:py-5 shadow-sm border-[1px] rounded-md ${className}`}>
      <img src={logo} className='md:h-28 h-20 w-20 md:w-36 rounded-md border-[1px] p-2 md:ml-4 md:mr-6 self-center' />
      <div className='md:flex-grow ml-2 md:-ml-4'>
        <div className='flex md:flex-row space-x-2 md:items-center md:mb-2'>
          <h3 className='md:text-2xl font-semibold'>{projectName}</h3>
          <p className='md:text-2xl text-gray-400 font-bold'>#</p>
        </div>
        <p className='truncate w-1/6 text-xs md:text-sm'>{description}</p>
        <p className='text-xs md:text-sm'>{truncatedAddress}</p>
        <div className='flex flex-wrap space-x-2 pt-4'>
          {tags.map((tag: string, index: number) => (
            <p key={index} className='px-2 md:font-semibold rounded-sm bg-secondarylight text-xs md:text-sm'>{tag}</p>
          ))}
        </div>
      </div>
      <div className='absolute md:w-24 md:mt-10 my-auto right-6 md:right-12 bottom-6 md:bottom-auto border-[1px] flex md:px-6 px-2 md:py-2 py-1 rounded-sm md:rounded-md text-gray-500 space-x-2'>
        <BiSolidUpArrow className='md:h-4 h-2 md:w-4 w-2 my-auto' />
        <p className='text-xs md:text-sm'>{votes}</p>
      </div>
    </div>
  );
};

export default SearchCard;
