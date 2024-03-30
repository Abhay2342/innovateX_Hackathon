import React from "react";
import { AppBar, Toolbar, Grid, Button } from "@mui/material";

const Header = () => {
  return (
    <AppBar
      position="static"
      style={{
        backgroundColor: "transparent",
        boxShadow: "none",
        padding: "20px",
      }}
    >
      <Toolbar disableGutters>
        <Grid container spacing={3} alignItems="center">
          {/* Logo Column */}
          {/* <Grid item xs={3} sm={2} md={2}>
            <img
              src={logo_header}
              alt="Logo"
              height={"100px"}
              width={"280px"}
            />
          </Grid> */}
          {/* Navigation Links Column */}
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            spacing={5}
            container
            justifyContent="center"
          >
            <Grid item>
              <Button href="/" variant="menu_header" color="inherit">
                HOME
              </Button>
            </Grid>
            <Grid item>
              <Button href="/jobs" variant="menu_header" color="inherit">
                JOBS
              </Button>
            </Grid>
            <Grid item>
              <Button variant="menu_header" color="inherit">
                CONTACT
              </Button>
            </Grid>
            <Grid item>
              <Button variant="menu_header" color="inherit">
                ABOUT US
              </Button>
            </Grid>
          </Grid>
          {/* Buttons Column */}
          {/* <Grid
            item
            xs={6}
            sm={6}
            md={4}
            spacing={3}
            container
            justifyContent="flex-end"
          >
            <Grid item>
              <Button variant="header" size="large">
                Student Login
              </Button>
            </Grid>
            <Grid item>
              <Button variant="header" size="large">
                Buy Package
              </Button>
            </Grid>
          </Grid> */}
        </Grid>
        
      </Toolbar>
    </AppBar>
  );
};

export default Header;
