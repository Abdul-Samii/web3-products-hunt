import Multiselect from 'multiselect-react-dropdown';
import { useContext, useState } from 'react';
import Modal from 'react-modal';
import { SearchContext } from '../../context/SearchContext';
import SocialInput from './SocialInput';

const NewProjectForm = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const { listModal, setListModal } = useContext(SearchContext);

  function closeModal() {
    setListModal(false);
  }
  const handleAddOption = (selectedList: any) => {
    setSelectedOptions(selectedList);
  }
  const handleRemoveOption = (selectedList: any) => {
    setSelectedOptions(selectedList);
  }
  const categories = [{ name: 'NFT', id: 1 }, { name: 'Blockchain', id: 2 }, { name: 'Marketplace', id: 3 }];

  return (
    <div>
      <Modal
        isOpen={listModal}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            padding: '20px',
            height: 'auto',
            width: '90%',
            maxWidth: '600px', // Maximum width for larger screens
            overflowY: 'auto', // Enables scrolling if content overflows
            
          }
        }}
      >
        <div className='mx-4'>
          <h2 className='font-bold text-primarydark'>Add a Project</h2>
          <div className='space-y-4 mt-4'>
            <div>
              <label className='text-xs'>Enter Project name</label>
              <input
                placeholder='Project name'
                className='border-[1px] w-full text-sm p-2 rounded-sm outline-none'
              />
            </div>
            <div>
              <label className='text-xs'>Enter Project description</label>
              <input
                placeholder='Project description'
                className='border-[1px] w-full text-sm p-2 rounded-sm outline-none'
              />
            </div>
            <div>
              <label className='text-xs'>Project address</label>
              <input
                placeholder='Project address (if any)'
                className='border-[1px] w-full text-sm p-2 rounded-sm outline-none'
              />
            </div>
            <div>
              <label className='text-xs'>Categories</label>
              <Multiselect
                options={categories}
                selectedValues={selectedOptions}
                onSelect={handleAddOption}
                onRemove={handleRemoveOption}
                displayValue="name"
              />
            </div>
          </div>
          <SocialInput />
          <div className='flex flex-col md:flex-row mt-4 space-y-2 md:space-y-0 md:space-x-2'>
            <button onClick={closeModal} className='bg-white w-full p-2 rounded-sm border-[1px]'>Close</button>
            <button onClick={closeModal} className='bg-primarylight text-white w-full p-2 rounded-sm'>Create</button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default NewProjectForm;
