import { Dispatch, SetStateAction } from 'react';

export interface ISearchContext {
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
  listModal: boolean;
  setListModal: Dispatch<SetStateAction<boolean>>;
  projects: any[] | undefined;
  setProjects: Dispatch<SetStateAction<any[] | undefined>>;
}

export interface IProjectContext {
  projects: any[] | undefined;
  setProjects: Dispatch<SetStateAction<any[] | undefined>>;
  createNewProject: (project: any) => void;
}