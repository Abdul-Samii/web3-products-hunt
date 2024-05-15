import Multiselect from 'multiselect-react-dropdown';
import { useContext, useState } from 'react';
import Modal from 'react-modal';
import { SearchContext } from '../../context/SearchContext';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '50px'
  },
};

const NewProjectForm = () => {
  const [selectedOptions, setSelectedOptions] = useState();
  const { listModal, setListModal } = useContext(SearchContext);

  function closeModal() {
    setListModal(false);
  }
  const handleAddOption = (selectedList: any, selectedItem: any) => {
    setSelectedOptions({...selectedList, selectedItem});
  }
  const handleRemoveOption = (selectedList: any, selectedItem: any) => {
    console.log(selectedItem);
    setSelectedOptions(selectedList);
  }
  const categories = [{name: 'NFT', id: 1}, {name: 'Blockchain', id: 2}, { name: 'Marketplace', id: 3}]
  return (
    <div>
      <Modal
        isOpen={listModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className='mx-6'>
          <h2 className='font-bold text-primarydark'>Add a Project</h2>
          <div className='space-y-2 mt-2 md:w-96'>
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
                placeholder='Project address(if any)'
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
          <div className='flex mt-4 space-x-2'>
            <button onClick={closeModal} className='bg-white w-full p-2 rounded-sm border-[1px]'>Close</button>
            <button onClick={closeModal} className='bg-primarylight text-white w-full p-2 rounded-sm'>Create</button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default NewProjectForm;
