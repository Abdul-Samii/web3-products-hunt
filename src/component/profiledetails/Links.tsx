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
    link?: string;
  };
}

const iconMap: IconMap = {
  website: { component: <TbWorldWww className='text-gray-600 h-12 w-12' />, placeholder: 'www.yoursite.com', label: 'Website', link: '' },
  github: { component: <FaGithub className='text-gray-600 h-12 w-12' />, placeholder: 'www.github.com/username', label: 'GitHub', link: 'www.github.com/' },
  facebook: { component: <FaFacebookF className='text-gray-600 h-12 w-12' />, placeholder: 'www.facebook.com/username', label: 'Facebook', link: 'www.facebook.com/' },
  instagram: { component: <FaInstagram className='text-gray-600 h-12 w-12' />, placeholder: 'www.instagram.com/username', label: 'Instagram', link: 'www.instagram.com/' },
  twitter: { component: <FaXTwitter className='text-gray-600 h-12 w-12' />, placeholder: 'www.x.com/username', label: 'Twitter', link: 'www.twitter.com/' },
  tiktok: { component: <IoLogoTiktok className='text-gray-600 h-12 w-12' />, placeholder: 'www.tiktok.com/username', label: 'TikTok', link: 'www.tiktok.com/' },
  telegram: { component: <BiLogoTelegram className='text-gray-600 h-12 w-12' />, placeholder: 'www.telegram.com/username', label: 'Telegram', link: 'www.telegram.com/' },
  youtube: { component: <IoLogoYoutube className='text-gray-600 h-12 w-12' />, placeholder: 'www.youtube.com/username', label: 'YouTube', link: 'www.youtube.com/' },
};

const Links = ({ project }: { project: any }) => {
  const links = project.links;
  let count: number = 0;
  return (
    <div className='flex flex-wrap gap-4 mt-8'>
      {
      Object.keys(iconMap).map((type) => {
        links[type] && count++;
        return(
        links[type] && 
        (
          <a
            key={type}
            href={type === 'website' ? links[type] : `${iconMap[type].link}${links[type]}`}
            target="_blank"
            rel="noopener noreferrer"
            className='bg-gray-100 rounded-lg p-2 md:p-4 hover:bg-blue-100'
          >
            {iconMap[type].component}
          </a>
        )
      )})
    }
    {count===0 && <p>No Links found</p>}
    </div>
  );
};

export default Links;
