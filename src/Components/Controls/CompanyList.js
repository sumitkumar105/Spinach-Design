import React from "react";
import { Grid } from "@mui/material";
function CompanyList(props) {
  let arr = ["Facebook", "Instagram", "Dribble", "Behance", "Twitter"];
  return (
    <div>
      <Grid
        container
        justifyContent={{ lg: "center", md: "center", xs: "flex-start" }}
      >
        {arr.map((item, index) => {
          return (
            <Grid item lg={2} md={2} xs={6}>
              <>
                <ul key={index}>
                  <li style={{ color: "white" }}>{item}</li>
                </ul>
              </>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default CompanyList;
