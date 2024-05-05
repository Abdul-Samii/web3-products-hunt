import { ArrowUpRightIcon } from '@heroicons/react/24/outline';
import ethereumIcon from '../assets/images/ethereum-icon.png';
import bitcoinIcon from '../assets/images/bitcoin-icon.png';
import lIcon from '../assets/images/l-icon.png';
import sherbankIcon from '../assets/images/sherbank-icon.png';

const Banner = () => {
  return (
    <div className='h-[40vh] md:h-[60vh] bg-gray-100 relative'>
      <div className="absolute inset-0 flex flex-col justify-center items-center px-4">
        <div className='flex bg-white shadow-sm py-1 px-4 rounded-md mb-4'>
          <p className="text-xs md:text-sm">$DEGEN ecosystem now live!</p>
          <ArrowUpRightIcon className='h-4 ml-2 mt-1' />
        </div>
        <h1 className='font-bold text-2xl md:text-5xl text-center w-full md:w-[40vw]'>Explore the best Web3 projects curated by the community</h1>
        <p className='text-center w-[30vw] text-gray-500 mt-4 hidden md:inline'>Discover a community-governed hand-picked selection of the latest projects from DeFi, NFT, Metaverse, Gaming, DAOs & more</p>
        <div className='space-x-3  mt-4 md:mt-12 relative flex md:space-x-4'>
          <button className='w-36 bg-white shadow-md hover:border-[1px] border-black py-2 md:py-2 rounded-md relative'>Explore</button>
          <button className='w-36 bg-black shadow-md hover:bg-gray-700 text-white py-2 md:py-2 rounded-md relative'>List a Project</button>
        </div>
        {/* Left side icons */}
        <div className="absolute left-4 md:left-[15%] top-1/2 transform -translate-y-1/2 flex-col items-center space-y-4 md:space-y-16 hidden md:flex">
          <img src={ethereumIcon} alt="Left Icon 1" className="h-8 md:h-12" />
          <img src={lIcon} alt="Left Icon 2" className="h-8 md:h-12" />
        </div>
        {/* Right side icons */}
        <div className="absolute right-4 md:right-[15%] top-1/2 transform -translate-y-1/2 flex-col items-center space-y-4 md:space-y-16 hidden md:flex">
          <img src={sherbankIcon} alt="Right Icon 1" className="h-8 md:h-12" />
          <img src={bitcoinIcon} alt="Right Icon 2" className="h-8 md:h-12" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
