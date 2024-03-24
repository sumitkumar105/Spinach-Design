import React from "react";
import { Box, Container, Stack } from "@mui/material";
import SubHeading from "../Components/Controls/SubHeading";
import DividerComponent from "../Components/Controls/DividerComponent";
import ParagraphComponent from "./Controls/ParagraphComponent";
import DesignSlider from "./DesignSlider";
function DesingMethodologyCompo(props) {
  return (
    <div>
      <Container>
        <Stack
          direction="row"
          spacing={2}
          justifyContent="space-around"
          sx={{ mt: { lg: 10 }, mb: 0 }}
        >
          <Container
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <SubHeading
              text="Our proven methodology for Design Systems."
              color="black"
            />
            <DividerComponent height="30px" />
            <Box
              sx={{
                width: { lg: "50%", sm: "100%" },
                textAlign: { lg: "center" },
                mb: { lg: 8, sm: 5 },
              }}
            >
              <ParagraphComponent
                text="Redesigning a design system is a densely strategised process that involves careful planning, collaboration, and iterative refinement."
                color="black"
              />
            </Box>
          </Container>
        </Stack>

        <DesignSlider />
      </Container>
    </div>
  );
}

export default DesingMethodologyCompo;
