import React from "react";
import { ChannelDetails, SearchVideos } from "../type";
import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";

type Props = {
  video: SearchVideos & ChannelDetails;
  marginTop?: string;
};

const ChannelCard: React.FC<Props> = ({
  video: {
    id: { channelId },
    snippet,
    statistics,
  },

  marginTop,
}) => {
  return (
    <Box
      sx={{
        borderRadius: "20px",
        width: {
          xs: "356px",
          md: "300px",
        },
        height: "326px",
        display: "flex",
        alignItems: "center",
        margin: "auto",
        justifyContent: "center",
        marginTop: marginTop,
      }}
    >
      <Link to={`/channel/${channelId}`}>
        <CardContent
          sx={{
            color: "#FFF",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <CardMedia
            image={snippet?.thumbnails.high.url}
            sx={{ height: "180px", width: "180px", borderRadius: "50%", mb: 2 }}
          />
          <Typography variant={"h6"}>
            {snippet?.title}{" "}
            <CheckCircle sx={{ fontSize: "14px", color: "gray", ml: "5px" }} />
          </Typography>
          {statistics?.subscriberCount && (
            <Typography
              sx={{ fontSize: "15px", color: "gray", fontWeight: 500 }}
            >
              {parseInt(statistics.subscriberCount).toLocaleString("en-US")}{" "}
              Subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
