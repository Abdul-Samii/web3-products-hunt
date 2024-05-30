import { Dispatch, SetStateAction } from 'react';

export interface ISearchContext {
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
  listModal: boolean;
  setListModal: Dispatch<SetStateAction<boolean>>;
  projects: any[] | undefined;
  setProjects: Dispatch<SetStateAction<any[] | undefined>>;
  searchProjects: any[] | undefined;
  setSearchProjects: Dispatch<SetStateAction<any[] | undefined>>;
  searchFilteredProjects: any[] | undefined;
  setSearchFilteredProjects: Dispatch<SetStateAction<any[] | undefined>>;
  coreCategory: any[] | undefined;
  setCoreCategory: Dispatch<SetStateAction<any[] | undefined>>;
  tags: any[] | undefined;
  setTags: Dispatch<SetStateAction<any[] | undefined>>;

}

export interface IProjectContext {
  projects: any[] | undefined;
  setProjects: Dispatch<SetStateAction<any[] | undefined>>;
  createNewProject: (project: any) => void;
}