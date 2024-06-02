import { SearchContext } from '../../context/SearchContext';
import HorizontalFilters from '../filters/HorizontalFilters';
import Card from '../listings/Card';
import Suggestions from './Suggestions';
import { useContext, useState, useEffect } from 'react';

const SearchResults = () => {
  const { searchFilteredProjects: projects } = useContext(SearchContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (projects !== undefined) {
      setLoading(false);
    }
  }, [projects]);

  return (
    <div className='mt-12 z-50'>
      <HorizontalFilters />
      <div className='flex justify-between mt-4'>
        <div className='md:w-[50%] w-full md:mx-auto px-2 space-y-2'>
          {loading ? (
            <div className="flex justify-center items-center">
              <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full border-blue-500 border-t-transparent"></div>
            </div>
          ) : (
            <>
              {projects?.length === 0 ? (
                <p>No Projects Found. Please use the form to upload</p>
              ) : (
                projects?.map((project, index) => (
                  <Card key={index} className='w-1/2' project={project} />
                ))
              )}
            </>
          )}
        </div>
        <Suggestions />
      </div>
    </div>
  );
};

export default SearchResults;
