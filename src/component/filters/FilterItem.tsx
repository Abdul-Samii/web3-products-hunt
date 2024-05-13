const FilterItem = ({filterItem, onClick}: any) => {
  return (
    <p onClick={onClick} className='border-[1px] cursor-pointer w-fit h-fit text-xs px-3 py-1 rounded-full whitespace-nowrap'>{filterItem}</p>
  )
}
export default FilterItem;
