import React from "react";
import { Box, Container, Divider } from "@mui/material";
import Footer from "./Footer";
import DividerComponent from "../Components/Controls/DividerComponent";
import HeadingComponent from "../Components/Controls/HeadingComponent";
import ExpericenceSlider from "../Components/ExpericenceSlider";
import ServiceComponent from "../Components/ServiceComponent";
import Frame from "../Assets/Frame 965.png";
function ExperienceComponent(props) {
  return (
    <div>
      <Box
        sx={{
          height: "auto",
          width: "100%",
          backgroundColor: "black",
        }}
      >
        <Container
          sx={{ height: "auto", width: "100%", backgroundColor: "black" }}
        >
          <DividerComponent height="80px" />
          <HeadingComponent text="Our previous experience." />
          <DividerComponent height="80px" />
          <ExpericenceSlider />
          <DividerComponent height="100px" />
        </Container>
        <Box sx={{ display: { lg: "block", md: "bloack", xs: "none" } }}>
          <DividerComponent height="100px" />
        </Box>
        <img width="100%" src={Frame} alt="design" />
        <Container>
          <DividerComponent height="80px" />
          <ServiceComponent />

          <DividerComponent height="100px" />
          <Divider
            sx={{
              border: "1px solid grey",
              width: "100%",
              marginY: 2,
            }}
          />
          {/* <DividerComponent height="50px" /> */}
          <Footer />
        </Container>
      </Box>
    </div>
  );
}

export default ExperienceComponent;
