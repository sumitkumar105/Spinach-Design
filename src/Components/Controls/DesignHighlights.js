import React from "react";
import { Stack, Box, Divider, Grid, Typography } from "@mui/material";
import ParagraphComponent from "./ParagraphComponent";

import DividerComponent from "./DividerComponent";
import HightlisghtsText from "./HightlisghtsText";
const DesignHighlights = () => {
  return (
    <>
      <Grid container spacing={2} justifyContent="space-between">
        <Grid item xs={12} lg={5} md={5}>
          <Box
            sx={{
              height: "auto",
              padding: "10px",
            }}
          >
            <HightlisghtsText
              number="/01"
              title="Research first."
              description="Our research is designed to interview stakeholders, end-users, and decision-makers in order to grasp diverse needs. We incorporate findings into a comprehensive strategy that aligns with business goals, ensuring the Design system meets user expectations and industry standards."
            />
          </Box>
          <Divider
            sx={{
              width: "100%",
              marginY: 2,
            }}
          />
        </Grid>
        <Grid item xs={12} lg={5} md={5}>
          <Box
            sx={{
              height: "auto",
              padding: "10px",
            }}
          >
            <HightlisghtsText
              number="/02"
              title="Brand-centric DLS."
              description="To reinforce the brand's visual identity, values and tone of voice,  we build consistency in the use of brand colours, typography, and imagery, coupled with intuitive interactions to foster brand affinity and loyalty across all touchpoints."
            />
          </Box>
          <Divider
            sx={{
              width: "100%",
              marginY: 2,
              color: "black",
            }}
          />
        </Grid>
        <Grid item xs={12} lg={5} md={5}>
          <Box
            sx={{
              height: "auto",
              padding: "10px",
            }}
          >
            <HightlisghtsText
              number="/03"
              title="Design principles and guidelines."
              description="Based on design trends, research outcomes and brand essence, we identify core values, guidelines and themes that drive the design creation process and craft an experience that is unique to the brand for its users."
            />
          </Box>
          <Divider
            sx={{
              width: "100%",
              marginY: 2,
            }}
          />
        </Grid>

        <Grid item xs={12} lg={5} md={5}>
          <Box
            sx={{
              height: "auto",
              padding: "10px",
            }}
          >
            <HightlisghtsText
              number="/04"
              title="Modularity for 
            multiple use-cases."
              description="We adopt a modular process of Design System creation. Based on use-cases and development prioritization we create components, patterns and templates that empower the design and dev teams to scale the sprint outcomes exponentially."
            />
          </Box>
          <Divider
            sx={{
              width: "100%",
              marginY: 2,
              color: "black",
            }}
          />
        </Grid>
        <Grid item xs={12} lg={5} md={5}>
          <Box
            sx={{
              height: "auto",
              padding: "10px",
            }}
          >
            <HightlisghtsText
              number="/05"
              title="Cross-functional collaboration."
              description="Our Design System collaboration is characterized by an inclusive working approach, fostering outcomes that excel in scale, efficiency and cost-effectiveness. We drive results that go beyond expectations, ensuring a synergy of creativity and practicality for optimal Design System performance."
            />
          </Box>
          <Divider
            sx={{
              width: "100%",
              marginY: 2,
            }}
          />
        </Grid>

        <Grid item xs={12} lg={5} md={5}>
          <Box
            sx={{
              height: "auto",
              padding: "10px",
            }}
          >
            <HightlisghtsText
              number="/06"
              title="Version control and documentation handover."
              description="We manage the handover process meticulously, with robust documentation and tight governance. Our processes ensure lasting consistency and quality, facilitating a seamless transition and nurturing the sustained success of the design system over time."
            />
          </Box>
          <Divider
            sx={{
              width: "100%",
              marginY: 2,
              color: "black",
            }}
          />
        </Grid>
      </Grid>

      <Box
        sx={{
          height: "auto",
          backgroundColor: "white",
          padding: "10px",
          mt: 5,
          mb: -7,
        }}
      >
        <div>
          <Divider>
            <Typography variant="h6" color="black">
              Centered Text
            </Typography>
          </Divider>
        </div>
        <DividerComponent height="20px" />
        <Divider style={{ borderColor: "grey" }} />
        <DividerComponent height="20px" />

        <Grid
          container
          rowGap={{ sm: 2, lg: "none", md: 2 }}
          direction="row"
          alignItems="center"
          justifyContent="center"
          sx={{ margin: "auto" }}
        >
          <Grid
            item
            xs={12}
            sm={6}
            lg={4}
            sx={{
              borderRight: { sm: "1px solid grey" },
              paddingLeft: { sm: 2 },
            }}
          >
            <Stack direction="row" spacing={1}>
              <ParagraphComponent
                text="/01"
                color="black"
                variant="subtitle2"
              />

              <ParagraphComponent
                text="Websites, apps and products"
                color="black"
                variant="body2"
              />
            </Stack>

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
            lg={4}
            sx={{
              borderRight: {
                lg: "1px solid grey",
                md: "none",
              },
              paddingLeft: { sm: 2 },
            }}
          >
            <Stack direction="row" spacing={1}>
              <ParagraphComponent
                text="/02"
                color="black"
                variant="subtitle2"
              />

              <ParagraphComponent
                text="SaaS and Enterprise 
            start-ups"
                color="black"
                variant="body2"
              />
            </Stack>

            <Divider
              sx={{
                width: "100%",
                marginY: 2,

                display: { xs: "block", sm: "none" },
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <Stack direction="row" spacing={1}>
              <ParagraphComponent
                text="/03"
                color="black"
                variant="subtitle2"
              />

              <ParagraphComponent
                text="SaaS and Enterprise 
            start-ups
            "
                color="black"
                variant="body2"
              />
            </Stack>

            <Divider
              sx={{
                width: "100%",
                marginY: 2,
                display: { xs: "block", sm: "none" },
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default DesignHighlights;
