import { BiSolidUpArrow } from 'react-icons/bi';
import { FaShareSquare } from 'react-icons/fa';

const Card = ({ className, project }: any) => {

  return (
    <div className={`bg-white border relative border-gray-200 h-28 md:h-36 w-full p-2 rounded-md shadow-sm ${className || 'md:w-48'}`}>
      <div className="flex items-center space-x-4">
        <img src={project.logo} alt="Icon" className="w-12 h-12 rounded-full border-2 border-white" />

        <div className="flex flex-col max-w-52 md:max-w-[85%]">
          <h2 className="font-bold text-lg text-nowrap">{project.name}</h2>
          <p className="text-sm text-gray-500 w-[85%] truncate md:overflow-visible md:text-wrap">{project.description}</p>
        </div>

        <div className="ml-auto flex items-center space-x-1 bg-slate-50 absolute right-4 top-[30%] md:top-[40%] border-[1px] px-4 py-2 rounded-md">
          <BiSolidUpArrow className="w-4 h-4 text-gray-500" />
          <p className="text-sm text-gray-500">{project.upvotes}</p>
        </div>
      </div>
      <div className='rounded-md flex justify-between'>
        {/* <p className="text-white text-center">Visit</p> */}
        <div className='flex space-x-2 ml-16 mt-4'>
          {/* <p className='text-xs'>DeFI</p>
          <p className='text-xs ml-2'>+2 more</p> */}
          <p className='px-2 rounded-sm border-[1px] bg-secondarylight text-xs'>Marketplace</p>
          <p className='px-2 rounded-sm border-[1px] bg-secondarylight text-xs'>NFT</p>
          <p className='text-xs ml-2'>+2 more</p>
          <FaShareSquare className='text-gray-500' />
        </div>
      </div>
    </div>
  );
};

export default Card;
