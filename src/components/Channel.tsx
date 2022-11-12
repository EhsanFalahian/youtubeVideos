import React from "react";
import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getChannelDetails, getChannelVideos } from "../utils/Apis";
import ChannelCard from "./ChannelCard";
import Videos from "./Videos";
import Video from "./Video";

const Channel = (): JSX.Element => {
  const { id } = useParams<string>();

  const { data: channelDetailData, isLoading } = useQuery(
    "channelDetails",
    () => getChannelDetails(id)
  );
  const { data: channelVideos } = useQuery("videosData", () =>
    getChannelVideos(id)
  );
  return (
    <Box minHeight={"95vh"}>
      <Box>
        <div
          style={{
            height: "300px",
            background:
              "linear-gradient(90deg, rgba(0, 212, 255, 1) 0%, rgba(237,0,200,1) 100%)",
            zIndex: 10,
          }}
        />
        {channelDetailData && (
          <ChannelCard video={channelDetailData} marginTop={"-120px"} />
        )}
      </Box>
      <Box display={"flex"} p={2}>
        <Box sx={{ mr: { sm: "100px" } }} />
        <Videos data={channelVideos} />
      </Box>
    </Box>
  );
};

export default Channel;
