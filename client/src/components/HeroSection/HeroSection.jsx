import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import "./HeroSection.css";

const HeroSection = ({}) => {
  return (
    <Box
      sx={{
        // backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid container spacing={0} paddingX={"20px"}>
        <Grid item xs={12} sm={12}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <Typography variant="bannerH1" align="center">
        CareerCompass
      </Typography>
      <Typography variant="tagLine" align="center">
        "Connect Talent With Opportunity"
      </Typography>
    </div>
        </Grid>
        <Grid item xs={12} sm={12}>
          {/* Empty column */}
        </Grid>
      </Grid>
    </Box>
  );
};

export default HeroSection;
