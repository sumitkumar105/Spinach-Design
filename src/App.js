import "./App.css";
import { Divider } from "@mui/material";
import Header from "./Components/Header";
import DividerComponent from "./Components/Controls/DividerComponent";
import VerticleLines from "./Components/Controls/VerticleLines";
import DesignSystemComponent from "./Components/DesignSystemComponent";
import DesingMethodologyCompo from "./Components/DesingMethodologyCompo";
import DesignSystemHighlightComponent from "./Components/DesignSystemHighlightComponent";
import ExperienceComponent from "./Components/ExperienceComponent";

function App() {
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      {/* verticle line from both side compoennts*/}
      <VerticleLines />
      {/* Header compoennts*/}
      <Header />
      <DividerComponent height="60px" />
      {/* Design System component start from here*/}

      <DesignSystemComponent />
      {/* Dessing System Methodology and slider strat from herer */}

      <DesingMethodologyCompo />
      <DividerComponent height="30px" />
      <Divider
        sx={{
          border: "1px light grey",
          width: "100%",
          marginY: 2,
          display: { lg: "block", xs: "none", md: "none" },
        }}
      />
      {/* Row4 Desisyetm Highlight Compoents contain the list of grid both side and heading */}

      <DesignSystemHighlightComponent />
      {/* Row5 Expericen and slider and footer contains in this component */}

      <ExperienceComponent />
    </div>
  );
}

export default App;
