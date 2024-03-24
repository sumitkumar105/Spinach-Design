import React from "react";
import { Stack, Typography } from "@mui/material";
function SpinachLogo({ variant }) {
  return (
    <Stack direction="row" alignItems="center">
      <Typography variant={variant} sx={{ color: "white" }}>
        Spinach
      </Typography>
      <Stack direction="column">
        <Typography variant="body2" sx={{ color: "white", mb: -1 }}>
          engineering
        </Typography>
        <Typography variant="body2" sx={{ color: "white" }}>
          design
        </Typography>
      </Stack>
    </Stack>
  );
}

export default SpinachLogo;
