import { Dispatch, SetStateAction } from 'react';

export interface ISearchContext {
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
  listModal: boolean;
  setListModal: Dispatch<SetStateAction<boolean>>;
}
