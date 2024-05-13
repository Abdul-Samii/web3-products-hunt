import logo from '../../assets/images/bitcoin-icon.png';

const Suggestions = () => {
  return (
    <div className='w-[25%] h-fit mt-12 p-6 rounded-md mr-4 shadow-sm border-[1px] hidden md:block'>
      <h2 className='font-bold text-xl'>Sponsored Listings</h2>
      <div className='flex space-x-3 mt-8 border-b-[1px] pb-6 '>
        <img src={logo} className='h-12 rounded-full' />
        <div className='w-[-webkit-fill-available]'>
          <h2 className='font-bold text-lg'>HERE Wallet</h2>
          <p className='truncate w-1/3'>Here Wallet Crypto is a game-changer! Its sleek interface and user-friendly design make managing cryptocurrencies a breeze</p>
        </div>
      </div>
      <div className='flex space-x-3 mt-8 border-b-[1px] pb-6'>
        <img src={logo} className='h-12 rounded-full' />
        <div className='w-[-webkit-fill-available]'>
          <h2 className='font-bold text-lg'>HERE Wallet</h2>
          <p className='truncate w-1/3'>Here Wallet Crypto is a game-changer! Its sleek interface and user-friendly design make managing cryptocurrencies a breeze</p>
        </div>
      </div>
      <div className='flex space-x-3 mt-8 border-b-[1px] pb-6'>
        <img src={logo} className='h-12 rounded-full' />
        <div className='w-[-webkit-fill-available]'>
          <h2 className='font-bold text-lg'>HERE Wallet</h2>
          <p className='truncate w-1/3'>Here Wallet Crypto is a game-changer! Its sleek interface and user-friendly design make managing cryptocurrencies a breeze</p>
        </div>
      </div>
      <div className='flex space-x-2 justify-center mt-8'>
        <button className='w-32 border-[1px] border-primarydark font-semibold rounded-md p-2'>View all</button>
        <button className='bg-primarydark text-white font-semibold w-32 rounded-md p-2'>List a project</button>
      </div>
    </div>
  )
}
export default Suggestions;
