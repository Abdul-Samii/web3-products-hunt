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
};
export const SearchContext = createContext<ISearchContext>(
  defaultSearchContext
);

interface Props {
  children: ReactNode;
}

const SearchContextContainer: FC<Props> = (props) => {
  const [searchValue, setSearchValue] = useState<string>(defaultSearchContext.searchValue);

  return (
    <SearchContext.Provider
      value={{
        searchValue,
        setSearchValue,
      }}
    >
      {props.children}
    </SearchContext.Provider>
  );
};

export default SearchContextContainer;
