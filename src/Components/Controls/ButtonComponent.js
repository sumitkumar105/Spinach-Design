import React from "react";
import { Button } from "@mui/material";
import { btnStyles } from "../../Styles/ButtonComponent";
const ButtonComponet = ({ text }) => {
  return (
    <>
      <Button sx={btnStyles} variant="outlined">
        {text}
      </Button>
    </>
  );
};
export default ButtonComponet;
