import React, { useState } from 'react';
import { FaShareSquare } from 'react-icons/fa';
import { BiSolidUpArrow } from 'react-icons/bi';
import { Links, OverView, TwitterFeed, YoutubeEmbed } from '../component/profiledetails';
import { useLocation } from 'react-router-dom';

interface SectionProps {
  section: 'overview' | 'links' | 'videos' | 'updates';
}

const ProfileDetail: React.FC = () => {
  const [activeSection, setActiveSection] = useState<SectionProps['section']>('overview');
  const location = useLocation();
  const { project } = location.state;

  return (
    <>
      <div className='h-44 w-full'>
        <img src={project.coverImg} className='object-cover h-44 w-full' />
      </div>
      <div className='mx-4 mt-4'>
        <div className='flex flex-col md:flex-row'>
          <img src={project.logo} className='h-20 w-28' />
          <div className='md:ml-2 mt-2 md:mt-0'>
            <h2 className='text-2xl font-bold'>{project.name}</h2>
            <p>{project.tldr}</p>
            <div className='flex space-x-2 mt-2'>
              {project.tags.map((item: any, index: number) => <p key={index} className='px-2 rounded-sm border-[1px] bg-secondarylight text-xs'>{item.name}</p>)}
              <FaShareSquare className='text-gray-500' />
            </div>
          </div>
        </div>
        <div className='md:flex mt-12'>
          <div className='flex space-x-6 w-full md:w-auto border-b-2'>
            {['overview', 'links', 'videos', 'updates'].map((section) => (
              <p
                key={section}
                className={`font-bold cursor-pointer ${activeSection === section ? 'border-b-2 border-primarydark' : ''}`}
                onClick={() => setActiveSection(section as SectionProps['section'])}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </p>
            ))}
          </div>
          <div className='hidden md:w-24 ml-[20%] md:ml-12 mb-2 border-[1px] md:flex md:px-6 px-2 md:py-2 py-1 rounded-sm md:rounded-md text-gray-500 space-x-2'>
            <BiSolidUpArrow className='md:h-4 h-2 md:w-4 w-2 my-auto' />
            <p className='text-xs md:text-sm'>79</p>
          </div>
        </div>
        {activeSection === 'overview' && (
          <>
            <OverView project={project} />
            <Links project={project} />
            <YoutubeEmbed channelId={project.links.youtube} />
            <TwitterFeed username={project.links.twitter} />
          </>
        )}
        {activeSection === 'links' && <Links project={project} />}
        {activeSection === 'videos' && <YoutubeEmbed channelId={project.links.youtube} />}
        {activeSection === 'updates' && <TwitterFeed username={project.links.twitter} />}
      </div>
    </>
  );
};

export default ProfileDetail;
