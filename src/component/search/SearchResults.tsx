import HorizontalFilters from '../filters/HorizontalFilters';
// import Card from '../listings/Card';
// import { projects } from '../listings/mockData';
// import Suggestions from "./Suggestions";

const SearchResults = () => {

  return (
    <div className='mt-12 z-50'>
      <HorizontalFilters />
      {/* <div className='flex justify-between mt-4'>
        <div className="md:w-[50%] w-full md:mx-auto px-2 space-y-2">
          {
            projects.map((project, index) => <Card key={index} className='w-1/2' project={project} />)
          }
        </div>
        <Suggestions />
      </div> */}
      <p className='text-center my-auto mt-28 font-extrabold text-red-600'>Search Apis are not integrated</p>
    </div>
  )
}
export default SearchResults;
