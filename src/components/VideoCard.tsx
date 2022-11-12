import React from "react";
import { SearchVideos } from "../type";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { CheckCircle } from "@mui/icons-material";
import { grey } from "@mui/material/colors";

type Props = {
  video: SearchVideos;
};

const VideoCard: React.FC<Props> = ({
  video: {
    id: { videoId, channelId },
    snippet,
  },
}) => {
  return (
    <Card
      sx={{ borderRadius: 0, width: { sx: "100%", sm: "358px", md: "300px" } }}
    >
      <Link to={`/video/${videoId}`}>
        <CardMedia
          image={snippet?.thumbnails?.high.url}
          sx={{ height: 180, width: { sx: "100%", sm: "358px" } }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: "#1e1e1e", height: "106px" }}>
        <Link to={`/video/${videoId}`}>
          <Typography variant={"subtitle1"} color={"#FFF"}>
            {snippet?.title.slice(0, 60)}
          </Typography>
        </Link>
        <Link to={`/channel/${channelId}`}>
          <Typography variant={"subtitle2"} color={"gray"}>
            {snippet?.channelTitle}
            <CheckCircle sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
