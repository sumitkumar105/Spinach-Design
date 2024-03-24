import React from "react";
import { Box, Stack, Container } from "@mui/material";
import Banner from "../Assets/Banner2.jpg";
import HeadingComponent from "./Controls/HeadingComponent";
import ParagraphComponent from "./Controls/ParagraphComponent";
import Navbar from "./Navbar";
import DividerComponent from "./Controls/DividerComponent";
const Header = () => {
  return (
    <>
      <Box
        sx={{
          height: "auto",
          width: "100%",
          backgroundColor: "black",
        }}
      >
        <Navbar />

        <DividerComponent height="30px" />
        <Stack
          direction="row"
          spacing={2}
          justifyContent="space-around"
          sx={{ mt: 10, mb: 0 }}
        >
          <Container
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <HeadingComponent text="Design System For Scale" />
            <DividerComponent height="30px" />
            <Box
              sx={{
                width: { lg: "50%", sm: "100%" },
                textAlign: { lg: "center" },
                mb: { lg: 8, sm: 5 },
              }}
            >
              <ParagraphComponent text="A Design System redesign roadmap has to be delicately handled and marked out with much careful consideration rather than impulse." />
            </Box>
          </Container>
        </Stack>
      </Box>
      <img width="100%" src={Banner} alt="Banner" />
    </>
  );
};
export default Header;
