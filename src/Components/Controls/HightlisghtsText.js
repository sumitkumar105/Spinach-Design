import React from "react";
import { Box } from "@mui/material";
import ParagraphComponent from "./ParagraphComponent";
import Subtitle from "./Subtitle";

function HightlisghtsText({ number, title, description }) {
  return (
    <Box>
      <ParagraphComponent text={number} color="black" variant="subtitle2" />
      <Subtitle text={title} />
      <ParagraphComponent text={description} color="black" variant="body2" />
    </Box>
  );
}

export default HightlisghtsText;
