import React, { useState } from "react";
import { Box, Stack } from "@mui/material";
import ShortTextIcon from "@mui/icons-material/ShortText";
import { theme } from "../Themes/Theme";
import Navtext from "./Controls/Navtext";
import ButtonComponet from "./Controls/ButtonComponent";
import SpinachLogo from "./Controls/SpinachLogo";
import DrawerComponent from "./Controls/DrawerComponent";
const Navbar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const handleOpenDrwawer = () => {
    setOpenDrawer(!openDrawer);
  };
  return (
    <>
      <Stack
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        spacing={1}
        sx={{ pt: 2 }}
      >
        <Stack
          direction="row"
          alignItems="center"
          spacing={2}
          sx={{ width: { lg: "25%" } }}
        >
          <ShortTextIcon
            onClick={handleOpenDrwawer}
            sx={{
              fontSize: 50,
              color: theme.palette.secondary,
              transform: "rotateY(180deg)",
            }}
          />
          <Box sx={{ display: { lg: "bloack", md: "block", xs: "none" } }}>
            <SpinachLogo variant="h5" />
          </Box>
        </Stack>
        {openDrawer && (
          <Box sx={{ display: { xs: "block", md: "none", lg: "none" } }}>
            <DrawerComponent
              open={openDrawer}
              handleCloseDrawer={handleOpenDrwawer}
            />
          </Box>
        )}
        <Box
          sx={{
            padding: "10px",
            width: "40%",
            backgroundColor: "grey",
            borderRadius: "50px",
            display: { lg: "block", md: "none", xs: "none" },
            marginRight: { lg: "50px" },
          }}
        >
          <Stack direction="row" justifyContent="center" alignItems="center">
            <Navtext text="TheCompany" />
            <Navtext text="OurService" color="black" />
            <Navtext text="OurExperties" />
            <Navtext text="ClientWork" />
          </Stack>
        </Box>
        <Box
          sx={{ width: { lg: "25%" }, display: "flex", justifyContent: "end" }}
        >
          <ButtonComponet text="Engage Us" />
        </Box>
      </Stack>
    </>
  );
};
export default Navbar;
