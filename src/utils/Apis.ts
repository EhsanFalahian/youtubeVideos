import { ChannelDetails, SearchVideos, VideoDetails } from "../type";
import { ApiResponse, get } from "./axios";

export const getSearchVideos = (
  selectedSearch?: string
): Promise<SearchVideos[]> => {
  return get<ApiResponse<SearchVideos[]>>(
    `search?part=snippet&q=${selectedSearch}`
  ).then((res) => res.data.items);
};

export const getChannelDetails = (id?: string): Promise<ChannelDetails> => {
  return get<ApiResponse<ChannelDetails[]>>(
    `channels?part=snippet&id=${id}`
  ).then((res) => res.data.items[0]);
};
export const getChannelVideos = (id?: string): Promise<SearchVideos[]> => {
  return get<ApiResponse<SearchVideos[]>>(
    `search?channelId=${id}&part=snippet%2Cid&order=date`
  ).then((res) => res.data.items);
};
export const getVideoDetails = (id?: string): Promise<VideoDetails> => {
  return get<ApiResponse<VideoDetails[]>>(
    `videos?part=snippet,statistics&id=${id}`
  ).then((res) => res.data.items[0]);
};

export const getRelatedVideos = (id?: string): Promise<SearchVideos[]> => {
  return get<ApiResponse<SearchVideos[]>>(
    `search?part=snippet&relatedToVideoId=${id}&type=video`
  ).then((res) => res.data.items);
};
