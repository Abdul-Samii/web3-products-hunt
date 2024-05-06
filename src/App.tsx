import { useState } from "react";
import { Banner, Navbar } from "./component";
import SearchResults from "./component/SearchResults";

const App = () => {
  const [searchValue, setSearchValue] = useState('');

	const handleSearchChange = (event: any) => {
    setSearchValue(event.target.value);
  };
  return (
    <div>
      <Navbar searchValue={searchValue} handleSearchChange={handleSearchChange} />
      {
        searchValue ? <SearchResults searchQuery={searchValue} /> : <Banner />
      }
    </div>
  );
};
export default App;
