const SubscribeCard= () => {
  return (
    <div className='bg-primarydark relative w-[85vw] md:w-[75vw] mx-auto h-[50vh] md:h-96 flex flex-col justify-center items-center rounded-2xl text-white my-16'>
      <h2 className='text-lg font-bold mr-2 text-white absolute top-12'><span className='font-thin'>YOUR</span>LOGO</h2>
      <div className='absolute justify-center flex flex-col items-center mt-[0rem]'>
      <h1 className='font-extrabold text-xl  top-24 md:text-4xl'>Get exclusive early access</h1>
      <p className='w-[80vw] text-sm md:text-lg md:w-[600px] tracking-wider mt-4 text-center'>Join our community of crypto lovers and have your say on the latest and greatest products and projects on the blockchain.</p>
      <a href='https://www.discord.gg/dMUA4WRqVF' target='_blank' className='w-72 md:w-96 bg-white shadow-md hover:border-[1px] text-center border-primarydark py-2 md:py-2 rounded-md absolute text-black mt-44'>JOIN DISCORD</a>
      </div>
    </div>
  )
}
export default SubscribeCard;
