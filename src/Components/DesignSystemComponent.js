import React from "react";
import { Container } from "@mui/material";
import SubHeading from "../Components/Controls/SubHeading";
import DividerComponent from "../Components/Controls/DividerComponent";
import InfoTextCompo from "../Components/Controls/InfoTextCompo";

function DesignSystemComponent(props) {
  return (
    <div>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          //   mb: 5,
        }}
      >
        <SubHeading text="A design system for website & apps  is critical to resolve:" />
        <DividerComponent height="30px" />
        <InfoTextCompo />
      </Container>
    </div>
  );
}

export default DesignSystemComponent;
