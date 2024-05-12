import { useState } from "react";
import { Banner, Navbar } from "./component";
import SearchResults from "./component/search/SearchResults";
import { Footer } from "./component/footer";
import SubscribeCard from "./component/SubscribeCard";
import { Proposals } from "./component/listings";

const App = () => {
  const [searchValue, setSearchValue] = useState('');

	const handleSearchChange = (event: any) => {
    setSearchValue(event.target.value);
  };
  return (
    <div className='h-[100vh]'>
      <Navbar searchValue={searchValue} handleSearchChange={handleSearchChange} />
      {
        searchValue ? <SearchResults searchQuery={searchValue} /> :(
          <>
          <Banner />
          <Proposals />
          <SubscribeCard />
          <Footer />
          </>
        )
      }
    </div>
  );
};
export default App;
