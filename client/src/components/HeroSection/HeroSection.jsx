import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import "./HeroSection.css";
import logo_header from "../../assets/career_compass.png";

const HeroSection = ({}) => {
  return (
    <Box
      sx={{
        // backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid container spacing={0} paddingX={"20px"}>
        <Grid item xs={3} sm={2} md={2}>
          <img src={logo_header} alt="Logo" height={"100px"} width={"280px"} />
        </Grid>
        <Grid item xs={12} sm={12}>
          <Typography variant="bannerH1">
            The ultimate academy's trading courses will teach you how to trade
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12}>
          {/* Empty column */}
        </Grid>
      </Grid>
    </Box>
  );
};

export default HeroSection;
