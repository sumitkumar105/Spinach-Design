import React from "react";
import { Typography } from "@mui/material";
const SubHeading = ({ text }) => {
  return (
    <>
      <Typography
        variant="h4"
        sx={{
          width: { lg: "50%", sm: "100%" },
          color: "black",
          fontFamily: "Haffer SQ XH",
          textAlign: { lg: "center", sm: "left" },
        }}
      >
        {text}
      </Typography>
    </>
  );
};
export default SubHeading;
