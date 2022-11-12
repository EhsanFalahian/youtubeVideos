import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import SideBar from "./SideBar";
import { useQuery } from "react-query";
import { getSearchVideos } from "../utils/Apis";
import Videos from "./Videos";

const Feed = (): JSX.Element => {
  const [selected, setSelected] = useState<string>("New");

  const { data, isLoading } = useQuery(["search", selected], () =>
    getSearchVideos(selected)
  );

  useEffect(() => {
    console.log(data);
  }, [selected]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "90vh" },
          borderRight: "1px solid #d3d3d3",
          px: { sx: 0, md: 2 },
        }}
      >
        <SideBar selected={selected} onSelected={setSelected} />
      </Box>
      <Box p={2} sx={{ height: "90vh", flex: 2, overflowY: "auto" }}>
        <Typography variant={"h4"} color={"white"} fontWeight={"bold"}>
          {selected} <span style={{ color: "#FC1503" }}>videos</span>
        </Typography>
        {isLoading ? (
          <div style={{ color: "white" }}>loading...</div>
        ) : (
          <Videos data={data} />
        )}
      </Box>
    </Stack>
  );
};

export default Feed;
