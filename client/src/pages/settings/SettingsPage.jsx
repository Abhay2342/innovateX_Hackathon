import React from "react";
import { Grid, Divider, Typography, IconButton } from "@mui/material";
import SettingsList from "../../components/SettingsList";
import { useState, useEffect } from "react";
import ProfileSettingsBody from "../../components/SettingsPage/ProfileSettingsBody";
import SouthIcon from "@mui/icons-material/South";
import AccountSettingsBody from "../../components/SettingsPage/CreateJobBody";
import { useNavigate } from "react-router-dom";
import coming_soon from "../../assets/coming_soon.png";
import CreateJobBody from "../../components/SettingsPage/CreateJobBody";

const SettingsPage = ({ path }) => {
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState(path);

  const handleCategoryClick = async (item) => {
    console.log(item);
    setSelectedItem(item);

    // Move the navigation logic here, it will be triggered when a category is clicked
    if (item === "CREATE JOB") {
      navigate("/create-job");
    } else if (item === "SUPPORT") {
      navigate("/contact-us");
    } else {
      // If not "ACCOUNT", navigate to the default profile settings URL
      navigate("/profile-settings");
    }
  };

  useEffect(() => {
    // Set the default selected item to the first item
    setSelectedItem(selectedItem);

    // Call the navigation function here after setting the default value
    navigateToSelectedCategory();
  }, []);

  const navigateToSelectedCategory = () => {
    // Navigation logic based on the selected item
    if (selectedItem === "CREATE JOB") {
      navigate("/create-job");
    } else if (selectedItem === "SUPPORT") {
      navigate("/contact-us");
    } else {
      // If not "ACCOUNT", navigate to the default profile settings URL
      navigate("/profile-settings");
    }
  };

  const renderSettingsBody = () => {
    if (selectedItem === "PROFILE") {
      return <ProfileSettingsBody />;
    } else if (selectedItem === "CREATE JOB") {
      return <CreateJobBody />;
    } else {
      // Render an image or any other content when no match is found
      return (
        <img
          src={coming_soon} // Replace with the path to your image
          alt="Default Image"
          style={{ width: "100%", height: "80vh" }}
        />
      );
    }

    // Add more conditions for other items if needed
  };

  return (
    <div>
      <Grid container>
        <Grid item container xs={11} paddingLeft={"8rem"}>
          <Grid item container>
            <Grid item container>
              <Grid item xs={2}>
                <SettingsList
                  selectedItem={selectedItem}
                  handleCategoryClick={handleCategoryClick}
                />
              </Grid>
              <Divider
                orientation="vertical"
                sx={{ borderRightWidth: 2, marginX: 5 }}
                variant="fullWidth"
                color="#3F3A3B"
                flexItem
              />

              <Grid item xs={9} paddingX={"50px"} justifyContent={"center"}>
                {renderSettingsBody()}
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid item container xs={1} justifyContent="center">
          <div
            style={{
              position: "relative",
              height: "92vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            {/* Typography for "Scroll Down" */}
            <Typography
              variant="caption"
              style={{
                fontFamily: "Lalezar",
                fontWeight: 400,
                color: "#3F3A3B",
                writingMode: "vertical-lr",
                textOrientation: "mixed",
                marginBottom: "16px",
              }}
            >
              SCROLL DOWN
            </Typography>

            {/* South Icon */}
            <IconButton variant="scroll" style={{ marginBottom: "16px" }}>
              {/* Assuming 'SouthIcon' is the name of the icon component you want to use */}
              {/* Replace it with the appropriate MUI icon component */}
              {/* For example, you can use ArrowDownwardIcon */}
              <SouthIcon />
            </IconButton>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default SettingsPage;
