import {
  useState,
  createContext,
  FC,
  ReactNode,
  useEffect,
} from 'react';
import { IProjectContext } from '../utils/types';
import { createProject, getAllProjects } from '../apis/projects';


const defaultSearchContext: IProjectContext = {
  projects: [],
  setProjects: () => {},
  createNewProject: () => {},
};
export const ProjectContext = createContext<IProjectContext>(
  defaultSearchContext
);

interface Props {
  children: ReactNode;
}

const ProjectContextContainer: FC<Props> = (props) => {
  const [projects, setProjects] = useState<any[]>();

  const handleGetProjects = async () => {
    try {
      const allProjects = await getAllProjects();
      setProjects(allProjects);
    } catch(error) {
      console.error(error);
    }
  }

  const createNewProject = async(project: any) => {
    try {
      await createProject(project);
    } catch(error) {
      console.error(error);
    }
  }

  useEffect(() => {
    handleGetProjects();
  }, [])

  return (
    <ProjectContext.Provider
      value={{
        projects,
        setProjects,
        createNewProject,
      }}
    >
      {props.children}
    </ProjectContext.Provider>
  );
};

export default ProjectContextContainer;
