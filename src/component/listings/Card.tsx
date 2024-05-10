import { BiSolidUpArrow } from 'react-icons/bi';
import logo1 from '../../assets/images/ethglobal-5.5e89e9c7.svg';
import logo2 from '../../assets/images/ethglobal-1.5f2444a8.svg';
import { LuDot } from 'react-icons/lu';

const Card = ({ className, project }: any) => {
  console.log("jjj ", project)
  return (
    <div className={`bg-white r border relative border-gray-200 h-36 md:w-48 w-full mx-4 p-2 rounded-md shadow-sm ${className}`}>
      <div className="flex items-center space-x-4">
        <img src={project.logo} alt="Icon" className="w-12 h-12 rounded-full border-2 border-white" />

        <div className="flex flex-col">
          <h2 className="font-bold text-lg text-nowrap">{project.name}</h2>
          <p className="text-sm text-gray-500">{project.description}</p>
          <p className="text-xs text-gray-400">{project.address}</p>
        </div>

        <div className="ml-auto flex items-center space-x-1 absolute right-4">
          <BiSolidUpArrow className="w-4 h-4 text-gray-500" />
          <p className="text-sm text-gray-500">{project.upvotes}</p>
        </div>
      </div>

      <hr className="my-4 border-gray-200" />

      <div className='rounded-md flex justify-between'>
        {/* <p className="text-white text-center">Visit</p> */}
        <div className='flex'>
          <LuDot />
          <p className='text-xs'>DeFI</p>
          <p className='text-xs ml-2'>+2 more</p>
        </div>
        <div className='flex'>
          <img src={logo1} className='h-5' />
          <img src={logo2} className='h-5' />
          <p className='text-xs ml-2'>+2 more</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
