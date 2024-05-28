import { Link } from 'react-router-dom';
import Suggestions from '../search/Suggestions';
import Card from './Card';
import ListingIntro from './ListingIntro';
import { projects } from './mockData';

const RecentlyAdded = () => {

  return (
    <>
    <ListingIntro title='Recently Added' />
    <div className='mt-12 z-50'>
      <div className='flex justify-between mt-4'>
        <div className="md:w-[50%] w-full md:mx-auto px-2 space-y-2">
          {
            projects.slice(0, 6).map((project, index) => (
              <Link to='/web3-products-hunt/profile-details'>
                <Card key={index} className='w-1/2' project={project} />
              </Link>
          ))
          }
        </div>
        <Suggestions />
      </div>
    </div>
    </>
  )
}
export default RecentlyAdded;
