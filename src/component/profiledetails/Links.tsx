import React from 'react';
import { TbWorldWww } from 'react-icons/tb';
import { FaGithub, FaFacebookF, FaInstagram } from 'react-icons/fa';
import { IoLogoTiktok, IoLogoYoutube } from 'react-icons/io5';
import { BiLogoTelegram } from 'react-icons/bi';
import { FaXTwitter } from 'react-icons/fa6';

interface IconMap {
  [key: string]: {
    component: JSX.Element;
    placeholder: string;
    label: string;
  };
}

const iconMap: IconMap = {
  website: { component: <TbWorldWww className='text-gray-600 h-12 w-12' />, placeholder: 'www.yoursite.com', label: 'Website' },
  github: { component: <FaGithub className='text-gray-600 h-12 w-12' />, placeholder: 'www.github.com/username', label: 'GitHub' },
  facebook: { component: <FaFacebookF className='text-gray-600 h-12 w-12' />, placeholder: 'www.facebook.com/username', label: 'Facebook' },
  instagram: { component: <FaInstagram className='text-gray-600 h-12 w-12' />, placeholder: 'www.instagram.com/username', label: 'Instagram' },
  twitter: { component: <FaXTwitter className='text-gray-600 h-12 w-12' />, placeholder: 'www.x.com/username', label: 'Twitter' },
  tiktok: { component: <IoLogoTiktok className='text-gray-600 h-12 w-12' />, placeholder: 'www.tiktok.com/username', label: 'TikTok' },
  telegram: { component: <BiLogoTelegram className='text-gray-600 h-12 w-12' />, placeholder: 'www.telegram.com/username', label: 'Telegram' },
  youtube: { component: <IoLogoYoutube className='text-gray-600 h-12 w-12' />, placeholder: 'www.youtube.com/username', label: 'YouTube' },
};

const Links: React.FC = () => {
  return (
    <div className='flex flex-wrap gap-4 mt-8'>
      {Object.keys(iconMap).map((type) => (
        <button
          key={type}
          className='bg-gray-100 rounded-lg p-2 md:p-4 hover:bg-blue-100'
        >
          {iconMap[type].component}
        </button>
      ))}
    </div>
  );
};

export default Links;
