import {
  useState,
  createContext,
  FC,
  ReactNode,
} from 'react';
import { ISearchContext } from '../utils/types';


const defaultSearchContext: ISearchContext = {
  searchValue: '',
  setSearchValue: () => {},
  listModal: false,
  setListModal: () => {},
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

  return (
    <SearchContext.Provider
      value={{
        searchValue,
        setSearchValue,
        listModal,
        setListModal,
      }}
    >
      {props.children}
    </SearchContext.Provider>
  );
};

export default SearchContextContainer;
