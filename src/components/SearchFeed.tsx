import React from "react";
import { Box, Typography } from "@mui/material";
import Videos from "./Videos";
import { useQuery } from "react-query";
import { getSearchVideos } from "../utils/Apis";
import { useParams } from "react-router-dom";

const SearchFeed = (): JSX.Element => {
  const { searchTerm } = useParams();
  const { data, isLoading } = useQuery(["search", searchTerm], () =>
    getSearchVideos(searchTerm)
  );
  return (
    <Box p={2} sx={{ height: "90vh", flex: 2, overflowY: "auto" }}>
      <Typography variant={"h4"} color={"white"} fontWeight={"bold"}>
        search <span style={{ color: "#FC1503" }}>{searchTerm}</span>
      </Typography>
      {isLoading ? (
        <div style={{ color: "white" }}>loading...</div>
      ) : (
        <Videos data={data} />
      )}
    </Box>
  );
};

export default SearchFeed;
