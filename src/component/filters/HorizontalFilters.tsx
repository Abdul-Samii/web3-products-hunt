import React, { useRef, useState, useEffect, useContext } from 'react';
import FilterItem from './FilterItem';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { SearchContext } from '../../context/SearchContext';

const HorizontalFilters: React.FC = () => {
  const { setSearchFilteredProjects, searchProjects, tags, coreCategory } = useContext(SearchContext);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedTag, setSelectedTag] = useState<string>('');

  const handleTagClick = (tagId: string) => {
    if (selectedTags.includes(tagId)) {
      setSelectedTags(selectedTags.filter(id => id !== tagId));
      setSelectedTag(''); // Deselect tag in the dropdown
    } else {
      setSelectedTags([...selectedTags, tagId]);
      setSelectedTag(tagId); // Select tag in the dropdown
    }
  };

  const handleCategoryClick = (categoryId: string) => {
    if (selectedCategories.includes(categoryId)) {
      setSelectedCategories(selectedCategories.filter(id => id !== categoryId));
    } else {
      setSelectedCategories([...selectedCategories, categoryId]);
    }
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

  useEffect(() => {
    const filterProjects = () => {
      let filteredProjects = searchProjects;

      if (selectedCategories.length > 0) {
        filteredProjects = filteredProjects?.filter(project =>
          selectedCategories.some(categoryId =>
            project.coreCategories.some((category: any) => category._id === categoryId)
          )
        );
      }

      if (selectedTags.length > 0) {
        filteredProjects = filteredProjects?.filter(project =>
          project.tags.some((tag: any) => selectedTags.includes(tag._id))
        );
      }
      setSearchFilteredProjects(filteredProjects);
    };

    filterProjects();
  }, [selectedTags, selectedCategories, searchProjects, setSearchFilteredProjects]);

  return (
    <div className='flex mt-4'>
      <div className='hidden md:inline relative w-[70%] ml-32'>
        {showLeftIcon && (
          <button className='absolute rounded-full h-10 -left-1 -top-1 bottom-0 px-3 py-1 bg-gray-200' onClick={() => scroll('left')}>
            <ChevronLeftIcon className='h-4 opacity-70' />
          </button>
        )}
        <div className='flex p-1 space-x-2 w-full overflow-x-hidden' ref={containerRef}>
          {coreCategory?.map((filterItem, index) => (
            <FilterItem
              key={index}
              filterItem={filterItem.name}
              selected={selectedCategories.includes(filterItem._id)}
              onClick={() => handleCategoryClick(filterItem._id)}
            />
          ))}
        </div>
        {showRightIcon && (
          <button className='absolute rounded-full h-10 -right-1 -top-1 bottom-0 px-3 py-1 bg-gray-200' onClick={() => scroll('right')}>
            <ChevronRightIcon className='h-4 opacity-70' />
          </button>
        )}
      </div>
      <select value={selectedTag} onChange={(e) => handleTagClick(e.target.value)} className='border-[1px] px-3 ml-4 rounded-md outline-none'>
        <option value="">Select a tag</option>
        {tags?.map((tag) => (
          <option value={tag._id} key={tag._id}>
            {tag.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default HorizontalFilters;
