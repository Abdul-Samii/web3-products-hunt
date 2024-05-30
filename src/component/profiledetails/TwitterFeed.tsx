import React from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

interface TwitterFeedProps {
  username: string;
}

const TwitterFeed: React.FC<TwitterFeedProps> = ({ username }: { username: string }) => {
  return (
    <div className="twitter-feed mt-8">
      {username ?
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName={username}
          noHeader
          noBorders
          noScrollbar
          theme="light"
        />
      :
      <h2>No Twitter username found</h2>
      }
    </div>
  );
};

export default TwitterFeed;
