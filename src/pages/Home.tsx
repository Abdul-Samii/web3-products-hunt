import SearchResults from '../component/search/SearchResults';
import Banner from '../component/Banner';
import SubscribeCard from '../component/SubscribeCard';
import { Footer } from '../component/footer';
import { useContext } from 'react';
import { SearchContext } from '../context/SearchContext';
import RecentlyAdded from '../component/listings/RecentlyAdded';
import NewProjectForm from '../component/addform/NewProjectForm';

const Home = () => {

  const { searchValue } = useContext(SearchContext);

  return (
    <div className='h-[100vh]'>
      {
        searchValue ? <SearchResults /> :(
          <>
          <Banner />
          {/* <Proposals /> */}
          <RecentlyAdded />
          <div className='h-28' />
          <SubscribeCard />
          <Footer />
          <NewProjectForm />
          </>
        )
      }
    </div>
  );
};
export default Home;
