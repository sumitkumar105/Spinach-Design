import React from "react";
import { Box, Divider, Grid } from "@mui/material";
import ParagraphComponent from "./ParagraphComponent";

import DividerComponent from "./DividerComponent";
const InfoTextCompo = () => {
  return (
    <>
      <Grid
        container
        rowGap={{ sm: 2, lg: "none", md: 2 }}
        direction="row"
        justifyContent="center"
      >
        <Grid
          item
          xs={12}
          sm={6}
          lg={3}
          sx={{
            borderRight: { sm: "1px solid grey" },
            paddingLeft: { sm: 2 },
          }}
        >
          <Box>
            <ParagraphComponent text="/01" color="black" variant="subtitle2" />

            <ParagraphComponent
              text="Inconsistent user experience."
              color="black"
              variant="body2"
            />
          </Box>

          <Divider
            sx={{
              width: "100%",
              marginY: 2,
              display: { xs: "block", sm: "none" },
            }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          lg={3}
          sx={{
            borderRight: {
              lg: "1px solid grey",
              md: "none",
            },
            paddingLeft: { sm: 2 },
          }}
        >
          <Box>
            <ParagraphComponent text="/01" color="black" variant="body2" />

            <ParagraphComponent
              text="Inconsistent user experience."
              color="black"
              variant="body2"
            />
          </Box>

          <Divider
            sx={{
              width: "100%",
              marginY: 2,

              display: { xs: "block", sm: "none" },
            }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          lg={3}
          sx={{
            borderRight: { sm: "1px solid grey" },
            paddingLeft: { sm: 2 },
          }}
        >
          <Box>
            <ParagraphComponent text="/01" color="black" variant="body2" />

            <ParagraphComponent
              text="Inconsistent user experience."
              color="black"
              variant="body2"
            />
          </Box>

          <Divider
            sx={{
              width: "100%",
              marginY: 2,
              display: { xs: "block", sm: "none" },
            }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          lg={3}
          sx={{
            paddingLeft: { sm: 2 },
          }}
        >
          <Box>
            <ParagraphComponent text="/01" color="black" variant="body2" />

            <ParagraphComponent
              text="Inconsistent user experience."
              color="black"
              variant="body2"
            />
          </Box>

          <Divider
            sx={{
              width: "100%",
              marginY: 2,
              display: { xs: "block", sm: "none" },
            }}
          />
        </Grid>
      </Grid>
      <DividerComponent height="30px" />

      <Divider
        sx={{
          border: "2px solid grey",
          width: "5%",
          marginY: 2,
          display: { lg: "block", xs: "none", md: "none" },
        }}
      />
    </>
  );
};

export default InfoTextCompo;
