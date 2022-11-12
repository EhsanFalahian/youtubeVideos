import React from "react";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Feed from "./components/Feed";
import { QueryClientProvider } from "react-query";
import reactQuery from "./utils/reactQuery";
import Video from "./components/Video";
import Channel from "./components/Channel";
import SearchFeed from "./components/SearchFeed";

const App = (): JSX.Element => {
  return (
    <QueryClientProvider client={reactQuery}>
      <BrowserRouter>
        <Box sx={{ backgroundColor: "#000" }}>
          <Navbar />
          <Routes>
            <Route path={"/"} element={<Feed />} />
            <Route path={"/video/:id"} element={<Video />} />
            <Route path={"/channel/:id"} element={<Channel />} />
            <Route path={"/search/:searchTerm"} element={<SearchFeed />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
