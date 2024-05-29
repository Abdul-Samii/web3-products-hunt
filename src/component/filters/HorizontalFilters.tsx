import React, { useRef, useState, useEffect, useContext } from 'react';
import FilterItem from './FilterItem';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { SearchContext } from '../../context/SearchContext';

const HorizontalFilters: React.FC = () => {
  const filters = [
    'Accounting', 'Action', 'Analytics', 'Art', 'Art & Culture', 'Block Explorers', 
    'Blockchain', 'Bloging Platforms', 'Bridges', 'Cross-Chain', 'Crowdfunding', 
    'DAO', 'DeFi', 'Exchange', 'Accounting', 'Action', 'Analytics', 'Art', 'Art & Culture', 'Block Explorers', 
    'Blockchain', 'Bloging Platforms', 'Bridges', 'Cross-Chain', 'Crowdfunding', 
    'DAO', 'DeFi', 'Exchange'
  ];
  const { setSearchValue, searchValue } = useContext(SearchContext);
  const handleSearchChange = (value: string) => {
    setSearchValue(searchValue + ','+ value);
  };
  const containerRef = useRef<HTMLDivElement>(null);
  const [showLeftIcon, setShowLeftIcon] = useState(false);
  const [showRightIcon, setShowRightIcon] = useState(true);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const container = containerRef.current;
        setShowLeftIcon(container.scrollLeft > 0);
        setShowRightIcon(container.scrollLeft < (container.scrollWidth - container.clientWidth));
      }
    };

    if (containerRef.current) {
      containerRef.current.addEventListener('scroll', handleScroll);
      handleScroll(); // Initial check
    }

    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrolling || !containerRef.current) return;
    
    const container = containerRef.current;
    const scrollAmount = container.offsetWidth * 0.2; // Scroll two items at a time
    const start = container.scrollLeft;
    const target = direction === 'left' ? Math.max(0, start - scrollAmount) : Math.min(container.scrollWidth - container.clientWidth, start + scrollAmount);
    const distance = target - start;
    const duration = 500; // Scroll duration in milliseconds
    
    let startTime: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      
      const elapsedTime = timestamp - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      container.scrollLeft = start + distance * progress;

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setScrolling(false);
      }
    };

    setScrolling(true);
    requestAnimationFrame(step);
  };

  return (
    <div className='flex mt-4'>
      <div className='hidden md:inline relative w-[70%] ml-32'>
        {showLeftIcon && (
          <button className='absolute rounded-full h-10 -left-1 -top-1 bottom-0 px-3 py-1 bg-gray-200' onClick={() => scroll('left')}>
            <ChevronLeftIcon className='h-4 opacity-70' />
          </button>
        )}
        <div className='flex p-1 space-x-2 w-full overflow-x-hidden' ref={containerRef}>
          {filters.map((filterItem, index) => (
            <FilterItem onClick={() => handleSearchChange(filterItem)} key={index} filterItem={filterItem} />
          ))}
        </div>
        {showRightIcon && (
          <button className='absolute rounded-full h-10 -right-1 -top-1 bottom-0 px-3 py-1 bg-gray-200' onClick={() => scroll('right')}>
            <ChevronRightIcon className='h-4 opacity-70' />
          </button>
        )}
      </div>
      <select className='border-[1px] px-3 ml-4 rounded-md outline-none'>
        <option>Sort by</option>
        <option>Votes</option>
        <option>Likes</option>
        <option>Visits</option>
      </select>
    </div>
  );
};

export default HorizontalFilters;