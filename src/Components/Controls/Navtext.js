import React from "react";
import { Typography, Box, Stack } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
const Navtext = ({ text, color }) => {
  return (
    <Box
      sx={{
        height: "30px",
        width: "100%",
        backgroundColor: color ? "black" : "none",
        borderRadius: "50px",
        // padding: "2px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stack direction="row" alignItems="center">
        <Typography
          sx={{ color: "white", fontSize: "12px", fontFamily: "Haffer SQ XH" }}
        >
          {text}
        </Typography>
        {color ? <ArrowDropDownIcon sx={{ color: "white" }} /> : null}
      </Stack>
    </Box>
  );
};
export default Navtext;
