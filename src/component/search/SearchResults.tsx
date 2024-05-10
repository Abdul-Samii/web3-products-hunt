import HorizontalFilters from "../filters/HorizontalFilters";
import SearchCard from "./SearchCard";
import Suggestions from "./Suggestions";

const SearchResults = ({ searchQuery }: {searchQuery: string}) => {
  const project1 = {
    projectName: 'Bitcoin',
    description: 'Bitcoin is the first decentralized cryptocurrency. Nodes in the peer-to-peer bitcoin network verify transactions through cryptography and record them in a public distributed ledger, called a blockchain',
    address: '0xE2EDAE4ACDAE3EA2AEA3AAEEA',
    votes: 199,
    tags: ['Marketplace', 'NFTS']
  }
  const project2 = {
    projectName: 'Ethereum',
    description: 'Ethereum is a decentralized blockchain with smart contract functionality. Ether is the native cryptocurrency of the platform. ',
    address: '0xE2EDAE4ACDAE3EA2AEA3AAEEA',
    votes: 19,
    tags: ['Marketplace', 'NFTS']
  }
  const project3 = {
    projectName: 'Solana',
    description: 'Solana is a blockchain platform which uses a proof-of-stake mechanism to provide smart contract functionality',
    address: '0xE2EDAE4ACDAE3EA2AEA3AAEEA',
    votes: 49,
    tags: ['Marketplace', 'NFTS']
  }
  const project4 = {
    projectName: 'Voting System',
    description: 'Bitcoin is the first decentralized cryptocurrency. Nodes in the peer-to-peer bitcoin network verify transactions through cryptography and record them in a public distributed ledger, called a blockchain',
    address: '0xE2EDAE4ACDAE3EA2AEA3AAEEA',
    votes: 199,
    tags: ['Marketplace', 'NFTS']
  }
  const project5 = {
    projectName: 'Fund Raising',
    description: 'Bitcoin is the first decentralized cryptocurrency. Nodes in the peer-to-peer bitcoin network verify transactions through cryptography and record them in a public distributed ledger, called a blockchain',
    address: '0xE2EDAE4ACDAE3EA2AEA3AAEEA',
    votes: 199,
    tags: ['Marketplace', 'NFTS']
  }
  return (
    <>
      <div className='pl-4 md:pl-44 pt-12 pb-12 border-b-[1px]'>
        <div className='flex'>
          <h2 className='font-bold text-3xl'>Explore Projects</h2>
          <p className='text-red-700 cursor-pointer bg-yellow-100 w-fit h-fit my-auto ml-2 text-xs px-2 py-[2px] border-[1px] rounded-full'>Clear filters</p>
        </div>
        <p>Search results for <i className=''>'{searchQuery}'</i></p>
      </div>
      <HorizontalFilters />
      <div className='flex justify-between'>
        <div className="md:w-[50%] w-full px-2">
          <SearchCard project={project1} />
          <SearchCard project={project2} />
          <SearchCard project={project3} />
          <SearchCard project={project4} />
          <SearchCard project={project5} />
        </div>
        <Suggestions />
      </div>
    </>
  )
}
export default SearchResults;
