import React from "react";
import { Stack, Grid, Typography } from "@mui/material";
function FooterTextComponent() {
  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={12} lg={6}>
        <Stack direction="column" spacing={2}>
          {["TheCompany", "OurServices", "OurExperties", "ClicentWork"].map(
            (text, index) => {
              return (
                <Typography sx={{ color: "white" }} key={index}>
                  {text}
                </Typography>
              );
            }
          )}
        </Stack>
      </Grid>

      <Grid item xs={12} lg={6}>
        <Stack direction="column" spacing={2}>
          {["Careers", "Privacy Policy", "Terms & condition"].map(
            (text, index) => {
              return (
                <Typography sx={{ color: "white" }} key={index}>
                  {text}
                </Typography>
              );
            }
          )}
        </Stack>
      </Grid>
    </Grid>
  );
}

export default FooterTextComponent;
