import * as React from "react";
import { Grid, Box, Stack, Typography, Button, Container } from "@mui/material";
import ParagraphComponent from "./Controls/ParagraphComponent";
import DividerComponent from "./Controls/DividerComponent";
import ButtonComponent from "./Controls/ButtonComponent";
import illustration from "../Assets/Illustartion.jpg";
const ServiceComponent = () => {
  return (
    <Grid
      container
      spacing={2}
      justifyContent="space-around"
      alignItems="center"
    >
      <Grid item xs={12} lg={6}>
        <Box
          sx={{
            height: "auto",
          }}
        >
          <Stack spacing={2}>
            <ParagraphComponent text="/Next service" />

            <Typography variant="h5" sx={{ color: "white" }}>
              Web and mobile apps
            </Typography>
            <Typography
              variatn="subtitle1"
              sx={{
                color: "white",
                display: { lg: "block", xs: "none", md: "none" },
              }}
            >
              Design stickiness and retention for web and mobile customer apps
              with our proven and tested Customer Experience Design process,
              builds behavioural engagement by leveraging Design Thinking for an
              end-to-end view of the customer acquisition and retention journey.
            </Typography>
            <Box sx={{ display: { lg: "block", xs: "none" } }}>
              <ButtonComponent text="Know More" />
            </Box>
          </Stack>
        </Box>
      </Grid>
      <DividerComponent width="20px" />
      <Grid item xs={12} lg={4} sx={{ mt: { xs: 4 } }}>
        <Container
          sx={{
            height: 400,

            width: { lg: "100%", xs: "80%" },
            mt: { xs: 2 },
            backgroundColor: "#36454F",
            position: "relative",
            "& img": {
              position: "absolute",
              top: -20,
              left: -20,
              objectFit: "cover",
            },
          }}
        >
          <Box>
            <img
              style={{
                height: "100%",
                width: "100%",
                position: "absolute",
              }}
              src={illustration}
              alt="banner"
            />
            <Button
              variant="outlined"
              color="primary"
              sx={{
                height: "50px",
                position: "absolute",
                top: 320,
                left: "25%",

                transform: "translateX(-50%)",
                display: { xs: "block", lg: "none" },
                zIndex: 1,
                borderRadius: "50px",
                borderColor: "white",
                color: "white",
              }}
            >
              Know More
            </Button>
          </Box>
        </Container>
      </Grid>
    </Grid>
  );
};
export default ServiceComponent;
