import PublicRoutes from './routes/PublicRoutes';
import { Navbar } from './component';
import SearchContextContainer from './context/SearchContext';
import { BrowserRouter } from 'react-router-dom';

const App = () => {

  return (
    <div className='h-[100vh]'>
      <BrowserRouter>
        <SearchContextContainer>
          <Navbar />
          <PublicRoutes />
        </SearchContextContainer>
      </BrowserRouter>
    </div>
  );
};
export default App;
