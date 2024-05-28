import HorizontalFilters from '../filters/HorizontalFilters';
import Card from '../listings/Card';
import { projects } from '../listings/mockData';
import Suggestions from "./Suggestions";

const SearchResults = () => {

  return (
    <div className='mt-12 z-50'>
      {/* <div className='pl-4 md:pl-44 pt-12 pb-12 border-b-[1px]'>
        <div className='flex'>
          <h2 className='font-bold text-3xl'>Explore Projects</h2>
          <p className='text-red-700 cursor-pointer bg-yellow-100 w-fit h-fit my-auto ml-2 text-xs px-2 py-[2px] border-[1px] rounded-full'>Clear filters</p>
        </div>
        <p>Search results for <i className=''>'{searchQuery}'</i></p>
      </div> */}
      <HorizontalFilters />
      <div className='flex justify-between mt-4'>
        <div className="md:w-[50%] w-full md:mx-auto px-2 space-y-2">
          {
            projects.map((project, index) => <Card key={index} className='w-1/2' project={project} />)
          }
        </div>
        <Suggestions />
      </div>
    </div>
  )
}
export default SearchResults;
