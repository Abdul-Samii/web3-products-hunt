import { Dispatch, SetStateAction } from 'react';

export interface ISearchContext {
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
}
