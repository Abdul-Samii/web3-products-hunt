import React from 'react';

interface FilterItemProps {
  filterItem: string;
  selected: boolean;
  onClick: () => void;
}

const FilterItem: React.FC<FilterItemProps> = ({ filterItem, selected, onClick }) => {
  return (
    <p
      onClick={onClick}
      className={`border-[1px] cursor-pointer w-fit h-fit text-xs px-3 py-1 rounded-full whitespace-nowrap ${selected ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
    >
      {filterItem}
    </p>
  );
};

export default FilterItem;
