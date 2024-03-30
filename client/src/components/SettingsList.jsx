// CategoryList.js
import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Badge from "@mui/material/Badge";
import { Typography } from "@mui/material";

const SettingsList = ({ selectedItem, handleCategoryClick }) => {
  const categories = ["PROFILE", "CREATE JOB"];

  return (
    <div>
      <Typography variant="filter" sx={{ borderBottom: 2 }}>
        SETTINGS
      </Typography>
      <List>
        {categories.map((category) => (
          <ListItem
            key={category}
            onClick={() => handleCategoryClick(category)}
            sx={{ paddingX: 0 }}
          >
            <ListItemButton
              sx={{
                lineHeight: "0px",
                fontWeight: 700,
                fontSize: "1rem",
                color: selectedItem === category ? "#F24E1E" : "#3F3A3B",
                padding: "5px 10px",
              }}
            >
              {category}
            </ListItemButton>
            {selectedItem === category && (
              <Badge
                color="error"
                variant="dot"
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
              />
            )}
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default SettingsList;
