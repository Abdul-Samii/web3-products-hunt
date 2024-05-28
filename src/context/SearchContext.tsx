import {
  useState,
  createContext,
  FC,
  ReactNode,
  useEffect,
} from 'react';
import { ISearchContext } from '../utils/types';
import { getAllProjects } from '../apis/projects';


const defaultSearchContext: ISearchContext = {
  searchValue: '',
  setSearchValue: () => {},
  listModal: false,
  setListModal: () => {},
  projects: [],
  setProjects: () => {},
};
export const SearchContext = createContext<ISearchContext>(
  defaultSearchContext
);

interface Props {
  children: ReactNode;
}

const SearchContextContainer: FC<Props> = (props) => {
  const [searchValue, setSearchValue] = useState<string>(defaultSearchContext.searchValue);
  const [listModal, setListModal] = useState<boolean>(defaultSearchContext.listModal);
  const [projects, setProjects] = useState<any[]>();

  const handleGetProjects = async () => {
    try {
      const allProjects = await getAllProjects();
      setProjects(allProjects);
    } catch(error) {
      console.error(error);
    }
  }
  useEffect(() => {
    handleGetProjects();
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
      }}
    >
      {props.children}
    </SearchContext.Provider>
  );
};

export default SearchContextContainer;
