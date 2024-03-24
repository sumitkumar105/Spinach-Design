import React from "react";
import { Grid, Card, CardContent, Typography, Divider } from "@mui/material";

const CustomCard = ({ title, content }) => {
  return (
    <Card sx={{ textAlign: "center", marginBottom: { xs: 2, sm: 0 } }}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
        <Typography variant="body2" component="p">
          {content}
        </Typography>
      </CardContent>
    </Card>
  );
};

const Demo = () => {
  return (
    <Grid container>
      <Grid
        item
        xs={12}
        sm={6}
        sx={{ borderRight: { sm: "2px solid black" }, paddingRight: { sm: 2 } }}
      >
        <CustomCard
          title="Subheading 1"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <Divider
          sx={{
            width: "100%",
            marginY: 2,
            borderColor: "red",
            display: { xs: "block", sm: "none" },
          }}
        />
      </Grid>
      <Grid item xs={12} sm={6} sx={{ paddingLeft: { sm: 2 } }}>
        <CustomCard
          title="Subheading 2"
          content="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
        <Divider
          sx={{
            width: "100%",
            marginY: 2,
            display: { xs: "block", sm: "none" },
          }}
        />
      </Grid>
    </Grid>
  );
};

export default Demo;
