import React from "react";
import { Grid, Typography, Divider } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Badge from "@mui/material/Badge";
import SettingsList from "../../components/SettingsList";
const EmployerDashboard = ({ selectedItem, handleCategoryClick }) => {
  return (
    <Grid container justifyContent={"center"}>
      <Grid item xs={2} justifySelf={"flex-end"}>
        <SettingsList />
      </Grid>
      <Divider
        orientation="vertical"
        sx={{ borderRightWidth: 2, height: "70vh" }}
        variant="middle"
        flexItem
      />
      <Grid item xs={7}></Grid>
    </Grid>
  );
};

export default EmployerDashboard;
