import React from "react";
import { Box, Container, Stack } from "@mui/material";
import SubHeading from "../Components/Controls/SubHeading";
import DividerComponent from "../Components/Controls/DividerComponent";
import DesignHighlights from "../Components/Controls/DesignHighlights";
import ParagraphComponent from "../Components/Controls/ParagraphComponent";

function DesignSystemHighlightComponent(props) {
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
              text="Design system process highlights:"
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
                text="A Design System redesign roadmap has to be delicately handled and marked out with much careful consideration rather than impulse."
                color="black"
              />
            </Box>
            <DesignHighlights />
          </Container>
        </Stack>
      </Container>
    </div>
  );
}

export default DesignSystemHighlightComponent;
