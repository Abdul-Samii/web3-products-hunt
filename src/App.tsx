import PublicRoutes from './routes/PublicRoutes';
import { Navbar } from './component';
import SearchContextContainer from './context/SearchContext';
import { BrowserRouter } from 'react-router-dom';
import ProjectContextContainer from './context/ProjectContext';

const App = () => {

  return (
    <div className='h-[100vh]'>
      <BrowserRouter>
        <ProjectContextContainer>
          <SearchContextContainer>
            <Navbar />
            <PublicRoutes />
          </SearchContextContainer>
        </ProjectContextContainer>
      </BrowserRouter>
    </div>
  );
};
export default App;
