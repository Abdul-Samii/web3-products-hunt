import { useNavigate } from 'react-router-dom';
import Suggestions from '../search/Suggestions';
import Card from './Card';
import ListingIntro from './ListingIntro';
import { useContext } from 'react';
import { ProjectContext } from '../../context/ProjectContext';

const RecentlyAdded = () => {
  const { projects } = useContext(ProjectContext);
  const navigate = useNavigate();
  const handleNavigation = (project: any) => {
    navigate('/web3-products-hunt/profile-details', { state: { project } });
  };
  return (
    <>
    <ListingIntro title='Recently Added' />
    <div className='mt-12 z-50'>
      <div className='flex justify-between mt-4'>
        <div className="md:w-[50%] w-full md:mx-auto px-2 space-y-2">
          {
            projects?.slice(0, 12).map((project, index) => (
              <div onClick={() => handleNavigation(project)}>
                <Card key={index} className='w-1/2' project={project} />
              </div>
          ))
          }
          {
            projects?.length === 0 && <p>No Projects Found. Please use the form to upload</p>
          }
        </div>
        <Suggestions />
      </div>
    </div>
    </>
  )
}
export default RecentlyAdded;
