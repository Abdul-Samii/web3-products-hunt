import React from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

interface TwitterFeedProps {
  username: string;
}

const TwitterFeed: React.FC<TwitterFeedProps> = ({ username }: { username: string }) => {
  return (
    <div className="twitter-feed mt-8">
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName={username}
        noHeader
        noBorders
        noScrollbar
        theme="light"
      />
    </div>
  );
};

export default TwitterFeed;
