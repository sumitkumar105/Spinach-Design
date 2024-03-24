import React from "react";
import { Typography } from "@mui/material";
const Subtitle = ({ text }) => {
  return (
    <>
      <Typography
        variant="h5"
        sx={{
          width: "100%",
          color: "black",
          fontFamily: "Haffer SQ XH",
          textAlign: "left",
        }}
      >
        {text}
      </Typography>
    </>
  );
};
export default Subtitle;
