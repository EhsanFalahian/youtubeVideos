import React, { SetStateAction, useCallback, useState } from "react";
import { Stack } from "@mui/material";
import { categories } from "../utils/Constant";
import styles from "./index.module.css";

type Props = {
  selected: string;
  onSelected: React.Dispatch<SetStateAction<string>>;
};

const SideBar: React.FC<Props> = ({ onSelected, selected }) => {
  return (
    <Stack
      direction={"row"}
      sx={{
        flexDirection: { md: "column" },
        overflow: "auto",
        height: { sx: "auto", md: "95%" },
      }}
    >
      {categories.map((item) => (
        <button
          type={"button"}
          className={styles.categoryBtn}
          style={{
            color: "white",
            backgroundColor: selected === item.name ? "#FC1503" : "transparent",
          }}
          onClick={() => onSelected(item.name)}
        >
          <span
            style={{
              color: selected === item.name ? "white" : "#FC1503",
              marginRight: 15,
            }}
          >
            {item.icon}
          </span>
          <span style={{ opacity: selected === item.name ? 1 : 0.8 }}>
            {item.name}
          </span>
        </button>
      ))}
    </Stack>
  );
};

export default SideBar;
