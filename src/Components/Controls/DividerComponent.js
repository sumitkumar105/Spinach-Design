import React from "react";
import { Divider } from "@mui/material";
const DividerComponent = ({ height, width }) => {
  return (
    <Divider
      sx={{
        height: height,
        width: width,
        borderColor: "lightgrey",
        border: "none",
      }}
    />
  );
};
export default DividerComponent;
