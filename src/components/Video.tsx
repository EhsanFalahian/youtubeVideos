import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import ReactPlayer from "react-player";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getRelatedVideos, getVideoDetails } from "../utils/Apis";
import { CheckCircle } from "@mui/icons-material";
import Videos from "./Videos";
import styles from "./index.module.css";
const Video = (): JSX.Element => {
  const { id } = useParams();
  const { data: videoDetails } = useQuery("videoDetails", () =>
    getVideoDetails(id)
  );
  const { data: videos } = useQuery("videos", () => getRelatedVideos(id));
  return (
    <Box minHeight={"95vh"}>
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              width={"100%"}
              controls={true}
            />

            <Typography fontWeight={"bold"} color={"#FFF"} p={2} variant={"h5"}>
              {videoDetails?.snippet.title}
            </Typography>
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
              sx={{ color: "#FFF", py: 1, px: 2 }}
            >
              <Link to={`/channel/${videoDetails?.snippet.channelId}`}>
                <Typography color={"#FFF"}>
                  {videoDetails?.snippet.channelTitle}
                  <CheckCircle
                    sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                  />
                </Typography>
              </Link>
              <Stack direction={"row"} gap={"20px"} alignItems={"center"}>
                {videoDetails?.statistics.viewCount && (
                  <Typography variant={"body1"} sx={{ opacity: 0.7 }}>
                    {parseInt(
                      videoDetails.statistics.viewCount
                    ).toLocaleString()}{" "}
                    views
                  </Typography>
                )}
                {videoDetails?.statistics.likeCount && (
                  <Typography variant={"body1"} sx={{ opacity: 0.7 }}>
                    {parseInt(
                      videoDetails.statistics.likeCount
                    ).toLocaleString()}{" "}
                    likes
                  </Typography>
                )}
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box
          px={2}
          py={{ md: 1, xs: 2 }}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Videos data={videos} direction={"column"} />
        </Box>
      </Stack>
    </Box>
  );
};

export default Video;
