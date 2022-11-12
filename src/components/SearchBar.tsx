import React, { useCallback, useState } from "react";
import { IconButton, Paper } from "@mui/material";
import { Search } from "@mui/icons-material";
import style from "./index.module.css";
import { useNavigate } from "react-router-dom";

const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>();
  const navigate = useNavigate();
  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`search/${searchTerm}`);
    }
    setSearchTerm("");
  };
  return (
    <Paper
      component={"form"}
      onSubmit={handleSubmit}
      sx={{
        borderRadius: 20,
        pl: 2,
        boxShadow: "none",
        border: "1px solid #e3e3e3",
        mr: { sm: 5 },
      }}
    >
      <input
        className={style.searchbar}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder={"search..."}
        value={searchTerm}
      />
      <IconButton sx={{ color: "red" }}>
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
