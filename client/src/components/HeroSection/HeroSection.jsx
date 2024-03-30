import React from "react";
import { Box, Grid, Typography, Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./HeroSection.css";

const HeroSection = ({
  handleLoginSubmit,
  handleSignUpSubmit,
  handleSearchSubmit,
}) => {
  return (
    <Box
      sx={{
        // backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "60vh",
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
            <Typography variant="tagLine" align="center">
              “Connecting Talent With Opportunity”
            </Typography>
          </div>
        </Grid>

        <Grid
          item
          paddingTop={5}
          xs={12}
          sm={12}
          md={12}
          spacing={3}
          container
          justifyContent="center"
          // Adjusted negative margin
        >
          <Grid container justifyContent="center" alignItems="center">
            <Grid item md={7}>
              <TextField
                sx={{
                  background: "#CCDDFF",
                  margin: "1px 0px",
                  border: 1.5,
                  boxShadow: "3px 3px 0px rgba(0, 0, 0, 0.25)",
                }}
                label="Search Jobs"
                InputLabelProps={{
                  style: {
                    fontSize: "30px",
                    position: "absolute",
                    top: "-8px",
                  },
                }}
                variant="outlined"
                fullWidth
                margin="normal"
                type="Type to search"
                required
              />
            </Grid>
            <Grid
              item
              md={"auto"}
              container
              justifyContent="center"
              marginY={"5px"}
            >
              <Button
                variant="listingSearch"
                size="large"
                sx={{
                  background: "#003396",
                  color: "white",
                  margin: "1px 0px",
                  border: 1.5,
                  borderColor: "#003396",
                  borderRadius: "0px",
                  "&:hover": {
                    // Define hover effect
                    backgroundColor: "white",
                    color: "#003396",
                    transition: "background-color 0.3s ease, color 0.3s ease",
                  },

                  boxShadow: "3px 3px 0px rgba(0, 0, 0, 0.25)",
                }}
                onClick={handleSearchSubmit}
              >
                Search
              </Button>
            </Grid>
          </Grid>
          <Grid item>
            <Button
              variant="header"
              size="large"
              sx={{
                "&:hover": {
                  // Define hover effect
                  backgroundColor: "white",
                  color: "#003396",
                  transition: "background-color 0.3s ease, color 0.3s ease",
                },
              }}
              onClick={handleLoginSubmit}
            >
              Login
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="header"
              size="large"
              sx={{
                backgroundColor: "white",
                border: 0,
                color: "#003396",
                "&:hover": {
                  // Define hover effect
                  backgroundColor: "#003396",
                  color: "white",
                  transition: "background-color 0.3s ease, color 0.3s ease",
                },
              }}
              onClick={handleSignUpSubmit}
            >
              SIGN UP
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HeroSection;
