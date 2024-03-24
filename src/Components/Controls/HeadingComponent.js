import React from "react";
import { Typography } from "@mui/material";
const HeadingComponent = ({ text, color }) => {
  return (
    <>
      <Typography
        variant="h3"
        sx={{
          color: color ? color : "white",
          fontFamily: "Haffer SQ XH",
          textAlign: { lg: "center", sm: "left" },
        }}
      >
        {text}
      </Typography>
    </>
  );
};
export default HeadingComponent;
