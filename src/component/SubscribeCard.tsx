import img1 from '../assets/images/ethglobal-1.5f2444a8.svg';
import img2 from '../assets/images/ethglobal-2.cfaec6e0.svg';
import img3 from '../assets/images/ethglobal-3.2125ab9a.svg';
import img4 from '../assets/images/ethglobal-4.7c77735e.svg';
import img5 from '../assets/images/ethglobal-5.5e89e9c7.svg';
import img6 from '../assets/images/ethglobal-6.2dae3b65.svg'
import img7 from '../assets/images/ethglobal-7.d2375a47.svg'

const SubscribeCard= () => {
  return (
    <div className='bg-primarydark relative w-[85vw] md:w-[75vw] mx-auto h-[60vh] md:h-[40vh] flex flex-col justify-center items-center rounded-2xl text-white my-16'>
      <div className="jsx-8c91e10c11059bad absolute top-4 mx-auto mb-8 flex h-[72px] w-[240px] items-center justify-center sm:mb-4
                sm:h-[68px] sm:w-[192px]">
        <div className="jsx-8c91e10c11059bad animation-1 absolute left-0 h-10 w-10 flex-none select-none sm:h-8 sm:w-8">
          <img alt="ethglobal-one" loading="lazy" width="40" height="40" decoding="async" data-nimg="1" src={img1}/>
        </div>
        <div className="jsx-8c91e10c11059bad animation-2 absolute left-6 h-12 w-12 flex-none select-none sm:left-4 sm:h-10 sm:w-10">
          <img alt="ethglobal-two" loading="lazy" width="48" height="48" decoding="async" data-nimg="1" src={img2}/>
        </div>
        <div className="jsx-8c91e10c11059bad animation-3 absolute left-14 h-[60px] w-[60px] flex-none select-none sm:left-10 sm:h-[50px] sm:w-[50px]">
          <img alt="ethglobal-three" loading="lazy" width="60" height="60" decoding="async" data-nimg="1" src={img3}/>
        </div>
        <div className="jsx-8c91e10c11059bad absolute inset-x-0 z-[3] mx-auto h-[72px] w-[72px] flex-none select-none sm:h-16 sm:w-16">
          <img alt="ethglobal-four" loading="lazy" width="72" height="72" decoding="async" data-nimg="1" src={img4}/>
        </div>
        <div className="jsx-8c91e10c11059bad animation-4 absolute right-14 z-[2] h-[60px] w-[60px] flex-none select-none sm:right-10 sm:h-[50px] sm:w-[50px]">
          <img alt="ethglobal-five" loading="lazy" width="60" height="60" decoding="async" data-nimg="1" src={img5}/>
        </div>
        <div className="jsx-8c91e10c11059bad animation-5 absolute right-6 z-[1] h-12 w-12 flex-none select-none sm:right-4 sm:h-10 sm:w-10">
          <img alt="ethglobal-six" loading="lazy" width="48" height="48" decoding="async" data-nimg="1" src={img6}/>
        </div>
        <div className="jsx-8c91e10c11059bad animation-6 absolute right-0 h-10 w-10 flex-none select-none sm:h-8 sm:w-8">
        <img alt="ethglobal-seven" loading="lazy" width="40" height="40" decoding="async" data-nimg="1" src={img7} />
        </div>
      </div>
      <h1 className='font-extrabold text-xl top-24 md:text-5xl absolute'>Subscribe to receive Alpha!</h1>
      <p className='w-[80vw] text-sm md:text-lg md:w-[35vw] tracking-wider mt-4 text-center absolute'>Join 4.3k subscribers from renowned companies worldwide and get a weekly update in your inbox. Stay updated on the latest and finest projects and product updates.</p>
      <div className='mt-8 absolute bottom-12'>
        <input placeholder='you@example.com' className='p-2 md:w-[20vw] rounded-l-md outline-none text-black' />
        <button className='p-2 bg-secondarydark rounded-r-md'>Subscribe</button>
      </div>
    </div>
  )
}
export default SubscribeCard;
