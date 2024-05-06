import HorizontalFilters from "./filters/HorizontalFilters";

const SearchResults = ({ searchQuery }: {searchQuery: string}) => {
  return (
    <>
      <div className='pl-4 md:pl-44 pt-12 pb-12 border-b-[1px]'>
        <div className='flex'>
          <h2 className='font-bold text-3xl'>Explore Projects</h2>
          <p className='text-red-700 cursor-pointer bg-yellow-100 w-fit h-fit my-auto ml-2 text-xs px-2 py-[2px] border-[1px] rounded-full'>Clear filters</p>
        </div>
        <p>Search results for <i className=''>'{searchQuery}'</i></p>
      </div>
      <HorizontalFilters />
    </>
  )
}
export default SearchResults;
