import React from "react";
import { Box, Grid, Typography, Button,TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./HeroSection.css";

const HeroSection = ({ handleLoginSubmit, handleSignUpSubmit,handleSearchSubmit }) => {
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
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              margin: "50px auto", // Center horizontally and reduce top margin
            }}
          >
            <Typography variant="bannerH1" align="center">
              CareerCompass
            </Typography>
            <Typography variant="tagLine" align="center" marginTop={"-20px"}>
              “Connecting Talent With Opportunity”
            </Typography>
          </div>
        </Grid>

        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          spacing={3}
          container
          justifyContent="center"
          marginY={"-20px"} // Adjusted negative margin
        >
          <Grid container
          justifyContent="center">
            <Grid item md={7}> 
            <TextField
                sx={{
                  background: "#CCDDFF",
                  margin: "1px 0px",
                  border: 1.5,
                  boxShadow: "3px 3px 0px rgba(0, 0, 0, 0.25)",
                }}
                label="Search Jobs"
                variant="outlined"
                fullWidth
                margin="normal"
                type="Type to search"
                required
              />
            </Grid>
          <Grid item
        md = {3}
        spacing={15}
        container
        justifyContent="center"
        marginY={"5px"}
        >
        <Button variant="header" size="large" sx={{
                  background: "#CCDDFF",
                  margin: "1px 0px",
                  border: 1.5,
                  borderRadius:1,
                  boxShadow: "px 3px 0px rgba(0, 0, 0, 0.25)",
                }} onClick={handleSearchSubmit}>
            Search
          </Button>

        </Grid>
          </Grid>
          <Grid item>
            <Button variant="header" size="large" onClick={handleLoginSubmit}>
              Login
            </Button>
          </Grid>
          <Grid item>
            <Button variant="header" size="large" onClick={handleSignUpSubmit}>
              SIGN UP
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HeroSection;
