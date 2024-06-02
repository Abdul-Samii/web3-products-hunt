import { useNavigate } from 'react-router-dom';
import Suggestions from '../search/Suggestions';
import Card from './Card';
import ListingIntro from './ListingIntro';
import { useContext, useState, useEffect } from 'react';
import { ProjectContext } from '../../context/ProjectContext';

const RecentlyAdded = () => {
  const { projects } = useContext(ProjectContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (projects !== undefined) {
      setLoading(false);
    }
  }, [projects]);

  const handleNavigation = (project: any) => {
    navigate('/profile-details', { state: { project } });
  };

  return (
    <>
      <ListingIntro title="Recently Added" />
      <div className="mt-12 z-50">
        <div className="flex justify-between mt-4">
          <div className="md:w-[50%] w-full md:mx-auto px-2 space-y-2">
            {loading ? (
              <div className="flex justify-center items-center">
                <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full border-blue-500 border-t-transparent"></div>
              </div>
            ) : (
              <>
                {projects?.length === 0 ? (
                  <p>No Projects Found. Please use the form to upload</p>
                ) : (
                  projects?.slice(0, 12).map((project, index) => (
                    <div key={index} onClick={() => handleNavigation(project)}>
                      <Card className="w-1/2" project={project} />
                    </div>
                  ))
                )}
              </>
            )}
          </div>
          <Suggestions />
        </div>
      </div>
    </>
  );
};

export default RecentlyAdded;
