import { useState } from 'react';
import { TbWorldWww } from 'react-icons/tb';
import { FaGithub, FaFacebookF, FaInstagram, FaReddit } from 'react-icons/fa';
import { FaXTwitter, FaDiscord } from 'react-icons/fa6';
import { IoLogoTiktok, IoLogoYoutube } from 'react-icons/io5';
import { BiLogoTelegram } from 'react-icons/bi';
import { FaLinkedin } from "react-icons/fa";
import { FaAppStoreIos } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";

const iconMap: any = {
  website: { component: <TbWorldWww className='text-gray-600 rounded-md' />, placeholder: 'www.yoursite.com', label: 'Website' },
  github: { component: <FaGithub className='text-gray-600 rounded-md' />, placeholder: 'www.github.com/username', label: 'GitHub' },
  facebook: { component: <FaFacebookF className='text-gray-600 rounded-md' />, placeholder: 'www.facebook.com/username', label: 'Facebook' },
  instagram: { component: <FaInstagram className='text-gray-600 rounded-md' />, placeholder: 'www.instagram.com/username', label: 'Instagram' },
  twitter: { component: <FaXTwitter className='text-gray-600 rounded-md' />, placeholder: 'www.x.com/username', label: 'Twitter' },
  tiktok: { component: <IoLogoTiktok className='text-gray-600 rounded-md' />, placeholder: 'www.tiktok.com/username', label: 'TikTok' },
  telegram: { component: <BiLogoTelegram className='text-gray-600 rounded-md' />, placeholder: 'www.telegram.com/username', label: 'Telegram' },
  youtube: { component: <IoLogoYoutube className='text-gray-600 rounded-md' />, placeholder: 'www.youtube.com/username', label: 'YouTube' },
  reddit: { component: <FaReddit className='text-gray-600 rounded-md' />, placeholder: 'www.reddit.com/user/username', label: 'Reddit' },
  discord: { component: <FaDiscord className='text-gray-600 rounded-md' />, placeholder: 'www.discord.com/username', label: 'Discord' },
  linkedin: { component: <FaLinkedin className='text-gray-600 rounded-md' />, placeholder: 'www.linkedin.com/username', label: 'Linkedin'},
  appstore: { component: <FaAppStoreIos className='text-gray-600 rounded-md' />, placeholder: 'app store link', label: 'App Store'},
  playstore: { component: <IoLogoGooglePlaystore className='text-gray-600 rounded-md' />, placeholder: 'play store link', label: 'Play Store'},
};
const SocialInput = ({ links, setLinks }: any) => {
  const [activeInputs, setActiveInputs] = useState(['facebook', 'twitter', 'youtube', 'tiktok']);

  const handleAddInput = (type: any) => {
    if (!activeInputs.includes(type)) {
      setActiveInputs([...activeInputs, type]);
    }
  };

  const handleRemoveInput = (type: any) => {
    setActiveInputs(activeInputs.filter(input => input !== type));
    setLinks({ ...links, [type]: '' });
  };

  const handleInputChange = (type: any, value: any) => {
    setLinks({ ...links, [type]: value });
  };

  return (
    <>
      <h1 className='text-primarydark font-semibold'>Social</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 w-full'>
        {activeInputs.map((type) => (
          <div key={type} className='flex flex-col'>
            <label className='text-xs'>{iconMap[type].label}</label>
            <div className='flex items-center'>
              <div className='p-2'>{iconMap[type].component}</div>
              <input
                placeholder={iconMap[type].placeholder}
                value={links[type] || ''}
                onChange={(e) => handleInputChange(type, e.target.value)}
                className='border-[1px] text-sm p-2 rounded-md outline-none flex-grow'
              />
              <button onClick={() => handleRemoveInput(type)} className='text-red-500 p-2'>✕</button>
            </div>
          </div>
        ))}
      </div>
      <div>
        <h2 className='text-xs mt-4'>Add more</h2>
        <div className='flex flex-wrap justify-between'>
          {Object.keys(iconMap).map((type) => (
            <button
              key={type}
              onClick={() => handleAddInput(type)}
              className={`bg-gray-200 rounded-md w-fit p-1 ${activeInputs.includes(type) ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={activeInputs.includes(type)}
            >
              {iconMap[type].component}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default SocialInput;
