import Card from './Card';
import ListingIntro from './ListingIntro';
import { projects } from './mockData';

const Proposals = () => {

  return (
    <>
    <ListingIntro title='Live Proposals' />
    <div className='flex justify-center flex-wrap w-full gap-x-5 gap-y-5 mt-8'>
      {
        projects.map((project, index) => <Card key={index} className='lg:w-1/6 md:w-1/3' project={project} />)
      }
    </div>
    <div className='mt-16'>
      <ListingIntro title='Listed Projects' />
      <div className='flex justify-center flex-wrap w-full gap-x-5 gap-y-5 mt-8'>
      <div className='flex justify-center flex-wrap w-full gap-x-5 gap-y-5 mt-8'>
        {
          projects.map((project, index) => <Card key={index} className='lg:w-1/6 md:w-1/3' project={project} />)
        }
      </div>
      </div>
    </div>
    </>
  )
}
export default Proposals;
