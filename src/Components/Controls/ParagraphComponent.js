import React from "react";
import { Typography } from "@mui/material";
const ParagraphComponent = ({ text, color, variant }) => {
  return (
    <Typography
      variant={variant ? variant : "body1"}
      sx={{
        color: color ? color : "white",
        fontFamily: "Haffer SQ XH",
        textWrap: "wrap",
      }}
    >
      {text}
    </Typography>
  );
};
export default ParagraphComponent;
