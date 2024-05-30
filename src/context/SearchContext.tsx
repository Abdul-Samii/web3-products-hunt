import { useState, createContext, FC, ReactNode, useEffect } from 'react';
import { ISearchContext } from '../utils/types';
import { getAllProjects, getProjectsBySearch } from '../apis/projects'; // Update this import
import { getAllTags } from '../apis/tags';
import { getAllCategories } from '../apis/category';

const defaultSearchContext: ISearchContext = {
  searchValue: '',
  setSearchValue: () => {},
  listModal: false,
  setListModal: () => {},
  projects: [],
  setProjects: () => {},
  searchProjects: [],
  setSearchProjects: () => {},
  searchFilteredProjects: [],
  setSearchFilteredProjects: () => {},
  coreCategory: [],
  setCoreCategory: () => {},
  tags: [],
  setTags: () => {},
};

export const SearchContext = createContext<ISearchContext>(defaultSearchContext);

interface Props {
  children: ReactNode;
}

const SearchContextContainer: FC<Props> = (props) => {
  const [searchValue, setSearchValue] = useState<string>(defaultSearchContext.searchValue);
  const [listModal, setListModal] = useState<boolean>(defaultSearchContext.listModal);
  const [projects, setProjects] = useState<any[]>();
  const [searchProjects, setSearchProjects] = useState<any[]>();
  const [searchFilteredProjects, setSearchFilteredProjects] = useState<any[]>();
  const [coreCategory, setCoreCategory] = useState<string[]>();
  const [tags, setTags] = useState<string[]>();

  const handleSearchProjects = async (searchValue: string) => {
    try {
      const filteredProjects = await getProjectsBySearch(searchValue);
      setSearchProjects(filteredProjects);
    } catch(error) {
      console.error(error);
    }
  };

  const handleGetProjects = async () => {
    try {
      const allProjects = await getAllProjects();
      setProjects(allProjects);
    } catch(error) {
      console.error(error);
    }
  }

  const handleGetTags = async () => {
    try {
      const allTags = await getAllTags();
      setTags(allTags);
    } catch(error) {
      console.error(error);
    }
  }
  const handleGetCategories = async () => {
    try {
      const allCategories = await getAllCategories();
      setCoreCategory(allCategories);
    } catch(error) {
      console.error(error);
    }
  }

  useEffect(() => {
    if (searchValue) {
      handleSearchProjects(searchValue);
    }
  }, [searchValue]);

  useEffect(() => {
    handleGetProjects();
    handleGetTags();
    handleGetCategories();
  }, [])

  return (
    <SearchContext.Provider
      value={{
        searchValue,
        setSearchValue,
        listModal,
        setListModal,
        projects,
        setProjects,
        searchProjects,
        setSearchProjects,
        searchFilteredProjects,
        setSearchFilteredProjects,
        coreCategory,
        setCoreCategory,
        tags,
        setTags,
      }}
    >
      {props.children}
    </SearchContext.Provider>
  );
};

export default SearchContextContainer;
