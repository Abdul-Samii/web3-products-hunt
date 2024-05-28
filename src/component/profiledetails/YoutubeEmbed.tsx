import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface YoutubeEmbedProps {
  channelId: string;
}

const YoutubeEmbed: React.FC<YoutubeEmbedProps> = ({ channelId }: { channelId: string }) => {
  const [videos, setVideos] = useState<any[]>([]);
  const apiKey = 'AIzaSyD7VZDxmy69DBoS6bD5nJAz94_R8_45Hwk';

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/search`,
          {
            params: {
              part: 'snippet',
              channelId: channelId,
              maxResults: 4,
              order: 'date',
              type: 'video',
              key: apiKey
            }
          }
        );
        setVideos(response.data.items);
      } catch (error) {
        console.error('Error fetching YouTube videos', error);
      }
    };

    fetchVideos();
  }, [channelId, apiKey]);

  return (
    <div className="youtube-embed space-y-4 mt-8">
      { channelId ?
      videos.map((video) => (
        <div key={video.id.videoId} className="video-item flex flex-col md:flex-row border-b-2 w-full p-4">
          <iframe
            className="w-full md:w-96 rounded-md"
            height="180px"
            src={`https://www.youtube.com/embed/${video.id.videoId}`}
            allowFullScreen
            title={video.snippet.title}
          ></iframe>
          <div className='md:ml-4 flex flex-col mt-4 md:mt-0'>
            <h3 className='font-extrabold text-lg'>{video.snippet.title}</h3>
            <p className='text-gray-400 font-semibold'>{video.snippet.channelTitle}</p>
          </div>
        </div>
      ))
      :
      <p>No youtube channel id found</p>
    }
    </div>
  );
};

export default YoutubeEmbed;
