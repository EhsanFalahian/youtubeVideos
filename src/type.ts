export type SearchVideos = {
  kind?: string;
  id: {
    kind?: string;
    videoId?: string;
    channelId: string;
  };
  snippet: {
    publishedAt?: string;
    channelId?: string;
    title: string;
    description?: string;
    channelTitle?: string;
    liveBroadcastContent?: string;
    publishTime?: string;
    thumbnails: {
      high: {
        url: string;
        width: number;
        height: number;
      };
    };
  };
};

export type ChannelDetails = {
  id: {
    channelId: string;
  };
  snippet: {
    title: string;
    thumbnails: {
      high: {
        url: string;
        width: number;
        height: number;
      };
    };
  };
  statistics?: {
    subscriberCount?: string;
  };
};

export type VideoDetails = {
  snippet: {
    channelId: string;
    title: string;
    channelTitle: string;
  };
  statistics: {
    viewCount: string;
    likeCount: string;
  };
};
