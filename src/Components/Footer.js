import React from "react";
import { Divider, Box, Stack, Grid, Typography } from "@mui/material";
import DividerComponent from "./Controls/DividerComponent";
import CompanyList from "./Controls/CompanyList";
import FooterTextComponent from "./FooterTextComponent";
import SpinachLogo from "./Controls/SpinachLogo";
const Footer = () => {
  return (
    <>
      <Box sx={{ display: { lg: "block", md: "block", xs: "none" } }}>
        <CompanyList />
      </Box>

      <DividerComponent height="50px" />
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} lg={8}>
          <Grid
            container
            spacing={2}
            justifyContent="center"
            sx={{
              height: "auto",
              borderRight: { sm: "1px solid grey" },
              marginRight: 1,
            }}
          >
            <Grid item xs={12} lg={4}>
              <Stack direction="column" spacing={4}>
                <SpinachLogo variant="h4" />

                <Stack
                  direction="column"
                  spacing={1}
                  sx={{ display: { lg: "block", md: "block", xs: "none" } }}
                >
                  <Typography sx={{ color: "white" }}>
                    7th floor, Corporate Park ||, Sion-Trombay Road, Chembur
                  </Typography>
                  <Typography sx={{ color: "white" }}>
                    Mumbai- 400071 , India.
                  </Typography>
                </Stack>
                <Box sx={{ display: { lg: "block", md: "block", xs: "none" } }}>
                  <Typography sx={{ color: "white" }}>
                    View on Google maps:
                  </Typography>
                </Box>
              </Stack>
            </Grid>

            <Grid item xs={12} lg={8}>
              <FooterTextComponent />
            </Grid>
          </Grid>
        </Grid>
        <Divider
          sx={{
            border: "1px solid grey",
            width: "100%",
            marginY: 2,
            display: { lg: "none", xs: "block", md: "none" },
          }}
        />
        <Box sx={{ display: { lg: "none", md: "none", xs: "block" } }}>
          <CompanyList />
        </Box>

        <Divider
          sx={{
            border: "1px solid grey",
            width: "100%",
            marginY: 2,
            display: { lg: "none", xs: "block", md: "none" },
          }}
        />

        <Grid item xs={12} lg={4}>
          <Box
            sx={{
              height: "auto",
            }}
          >
            <Stack direction="column" spacing={1}>
              <Typography sx={{ color: "white" }}>
                Business enquiries:
              </Typography>
              <Typography sx={{ color: "white" }}>
                eshani@spinachexperience.design
              </Typography>
              <Typography sx={{ color: "white" }}>+91 9821297209</Typography>
            </Stack>
            <Stack direction="column" spacing={1}>
              <Typography sx={{ color: "white" }}>
                Business enquiries:
              </Typography>
              <Typography sx={{ color: "white" }}>
                eshani@spinachexperience.design
              </Typography>
              <Typography sx={{ color: "white" }}>+91 9821297209</Typography>
            </Stack>
            <Stack direction="column" spacing={1}>
              <Typography sx={{ color: "white" }}>Address:</Typography>
              <Typography sx={{ color: "white" }}>
                7th floor, Corporate Park ||, Sion-Trombay Road, Chembur
              </Typography>
              <Typography sx={{ color: "white" }}>
                Mumbai- 400071 , India.
              </Typography>
            </Stack>
          </Box>
        </Grid>
      </Grid>
      <Divider
        sx={{
          border: "1px solid grey",
          width: "100%",
          marginY: 2,
        }}
      />
      <DividerComponent height="20px" />
      <Typography
        sx={{ color: "white", textAlign: { lg: "center", sm: "left" } }}
      >
        © 2024 Spinach Experience Design
      </Typography>
      <DividerComponent height="10px" />
    </>
  );
};
export default Footer;
