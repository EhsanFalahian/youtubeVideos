import React from "react";
import { Box, Stack } from "@mui/material";
import { SearchVideos } from "../type";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";

type Props = {
  data?: SearchVideos[];
  direction?: "row" | "row-reverse" | "column" | "column-reverse";
};

const Videos: React.FC<Props> = ({ data, direction }) => {
  return (
    <Stack
      direction={direction || "row"}
      flexWrap={"wrap"}
      justifyContent={"start"}
      gap={2}
      sx={{ overflow: "auto" }}
    >
      {data?.map((item) => (
        <Box>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard video={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
