import SearchResults from '../component/search/SearchResults';
import Banner from '../component/Banner';
import SubscribeCard from '../component/SubscribeCard';
import { Footer } from '../component/footer';
import { useContext } from 'react';
import { SearchContext } from '../context/SearchContext';

const Home = () => {

  const { searchValue } = useContext(SearchContext);

  return (
    <div className='h-[100vh]'>
      {
        searchValue ? <SearchResults /> :(
          <>
          <Banner />
          {/* <Proposals /> */}
          <div className='h-96' />
          <SubscribeCard />
          <Footer />
          </>
        )
      }
    </div>
  );
};
export default Home;
