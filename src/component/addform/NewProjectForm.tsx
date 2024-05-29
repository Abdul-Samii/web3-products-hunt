import Multiselect from 'multiselect-react-dropdown';
import { useContext, useState } from 'react';
import { SearchContext } from '../../context/SearchContext';
import SocialInput from './SocialInput';
import { ProjectContext } from '../../context/ProjectContext';
import { uploadBytesResumable, ref } from 'firebase/storage';
import { storage } from '../../hooks/useFirebase';
import { getDownloadURL } from 'firebase/storage';

const NewProjectForm = () => {
  const [selectedCategoryOptions, setSelectedCategoryOptions] = useState([]);
  const [selectedTagOptions, setSelectedTagOptions] = useState([]);
  const [logoImage, setLogoImage] = useState(null);
  const [coverImage, setCoverImage] = useState(null);
  const [projectName, setProjectName] = useState('');
  const [overview, setOverview] = useState('');
  const [tldr, setTldr] = useState('');
  const [logoUrl, setLogoUrl] = useState('');
  const [coverUrl, setCoverUrl] = useState('');
  const [links, setLinks] = useState({
    website: '',
    github: '',
    facebook: '',
    instagram: '',
    twitter: '',
    tiktok: '',
    telegram: '',
    youtube: '',
    reddit: '',
    discord: '',
    linkedin: '',
    appstore: '',
    playstore: ''
  });
  const [uploadProgress, setUploadProgress] = useState(0);
  const [loading, setLoading] = useState(false); // State to control the loading overlay

  const { setListModal } = useContext(SearchContext);
  const { createNewProject } = useContext(ProjectContext);

  function closeModal() {
    setListModal(false);
  }

  const handleAddCategoryOption = (selectedList: any) => {
    setSelectedCategoryOptions(selectedList.map((option: any) => option.id));
  };

  const handleRemoveCategoryOption = (selectedList: any) => {
    setSelectedCategoryOptions(selectedList.map((option: any) => option.id));
  };

  const handleAddTagOption = (selectedList: any) => {
    setSelectedTagOptions(selectedList.map((option: any) => option.id));
  };

  const handleRemoveTagOption = (selectedList: any) => {
    setSelectedTagOptions(selectedList.map((option: any) => option.id));
  };

  const handleLogoChange = (e: any) => {
    setLogoImage(e.target.files[0]);
  };

  const handleCoverChange = (e: any) => {
    setCoverImage(e.target.files[0]);
  };

  const Loader = ({ progress }: { progress: any }) => {
    return (
      <div className="loader-overlay">
        <div className="loader">
          <p>Uploading {progress}% done</p>
        </div>
      </div>
    );
  };

  const handleUpload = async (imageToUpload: any, type: number) => {
    setLoading(true)
    if (imageToUpload) {
      const storageRef = ref(storage, `images/${Date.now()}`);
      const uploadTask = uploadBytesResumable(storageRef, imageToUpload);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          // Progress function...
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          setUploadProgress(progress);
        },
        (error) => {
          // Error function...
          console.error('Upload failed', error);
        },
        () => {
          // Complete function...
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            type === 1 ? setLogoUrl(downloadURL) : setCoverUrl(downloadURL);
            console.log('File available at', downloadURL);
            setLoading(false);
          });
        }
      );
    }
  }

  const handleCreateProject = async () => {
    if (projectName && overview && tldr && logoUrl && coverUrl && selectedCategoryOptions.length && selectedTagOptions.length) {
      const obj = {
        name: projectName,
        coreCategories: selectedCategoryOptions,
        tags: selectedTagOptions,
        tldr,
        overview,
        logo: logoUrl,
        coverImg: coverUrl,
        links,
      };
      createNewProject(obj);
      alert('Project Added!')
      closeModal();
      return;
    }
    alert('Please fill add the required fields')
  };

  const categories = [
    { name: 'NFT', id: '6655d96ff5d1b2172f92dee1' },
    { name: 'Blockchain', id: '6655d97ef5d1b2172f92dee2' },
    { name: 'Marketplace', id: '6655d987f5d1b2172f92dee3' },
  ];
  const tags = [
    { name: 'Metaverse', id: '6655d9c1f5d1b2172f92dee4' },
    { name: 'Trading', id: '6655d9cef5d1b2172f92dee5' },
    { name: 'DeFi', id: '6655d9dcf5d1b2172f92dee6' },
  ];

  return (
    <div className='md:mx-[20%] mt-12'>
      {loading && <div className="overlay"></div>}
      {loading && <Loader progress={uploadProgress} />}
      <div className='mx-4'>
        <h2 className='font-bold text-primarydark text-center md:text-left'>Add a Project</h2>
        <div className='mt-4 grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div className='col-span-1 md:col-span-2'>
            <label className='text-xs'>Project name</label>
            <input
              placeholder='Project name'
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              className='border-[1px] w-full text-sm p-2 rounded-sm outline-none'
            />
          </div>
          <div className='col-span-1 md:col-span-1'>
            <label className='text-xs'>Categories</label>
            <Multiselect
              options={categories}
              selectedValues={selectedCategoryOptions.map(id => categories.find(cat => cat.id === id))}
              onSelect={handleAddCategoryOption}
              onRemove={handleRemoveCategoryOption}
              displayValue="name"
              className="border-[1px] w-full text-sm p-2 rounded-sm outline-none"
            />
          </div>
          <div className='col-span-1 md:col-span-1'>
            <label className='text-xs'>Tags</label>
            <Multiselect
              options={tags}
              selectedValues={selectedTagOptions.map(id => tags.find(tag => tag.id === id))}
              onSelect={handleAddTagOption}
              onRemove={handleRemoveTagOption}
              displayValue="name"
              className="border-[1px] w-full text-sm p-2 rounded-sm outline-none"
            />
          </div>
          <div className='col-span-1 md:col-span-2'>
            <label className='text-xs'>Project Overview</label>
            <textarea
              placeholder='Project overview'
              value={overview}
              onChange={(e) => setOverview(e.target.value)}
              className='border-[1px] w-full text-sm p-2 rounded-sm outline-none'
            />
          </div>
          <div className='col-span-1 md:col-span-2'>
            <label className='text-xs'>Project TL;DR</label>
            <textarea
              placeholder='Project TL;DR'
              value={tldr}
              onChange={(e) => setTldr(e.target.value)}
              className='border-[1px] w-full text-sm p-2 rounded-sm outline-none'
            />
          </div>
          <div className='col-span-1 md:col-span-1'>
            <label className='text-xs'>Logo Image</label>
            <div className="flex items-center">
              <input
                type='file'
                onChange={handleLogoChange}
                className='border-[1px] w-full text-sm p-2 rounded-sm outline-none'
              />
              <button onClick={() => handleUpload(logoImage, 1)} className="ml-2 px-4 py-2 bg-primarylight text-white rounded-md">Upload</button>
            </div>
            {logoUrl && <img src={logoUrl} alt="Logo Preview" className="mt-2 w-full" />}
          </div>
          <div className='col-span-1 md:col-span-1'>
            <label className='text-xs'>Cover Image</label>
            <div className="flex items-center">
              <input
                type='file'
                onChange={handleCoverChange}
                className='border-[1px] w-full text-sm p-2 rounded-sm outline-none'
              />
              <button onClick={() => handleUpload(coverImage, 2)} className="ml-2 px-4 py-2 bg-primarylight text-white rounded-md">Upload</button>
            </div>
            {coverUrl && <img src={coverUrl} alt="Cover Preview" className="mt-2 w-full" />}
          </div>
        </div>
        <SocialInput links={links} setLinks={setLinks} />
        <div className='flex flex-col md:flex-row mt-4 space-y-2 md:space-y-0 md:space-x-2'>
          <button onClick={closeModal} className='bg-white w-full p-2 rounded-sm border-[1px]'>Close</button>
          <button onClick={handleCreateProject} className='bg-primarylight text-white w-full p-2 rounded-sm'>Create</button>
        </div>
      </div>
    </div>
  );
}

export default NewProjectForm;
