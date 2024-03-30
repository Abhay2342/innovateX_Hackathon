import React from "react";
import { TextField, Button, Grid, Typography } from "@mui/material";

const FilterSidebar = ({ filters, setFilters, handleFilterSubmit }) => {
  const handleInputChange = (event, filterKey) => {
    const updatedFilters = { ...filters, [filterKey]: event.target.value };
    setFilters(updatedFilters);
  };

  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Filters
      </Typography>
      <TextField
        label="Company"
        variant="outlined"
        value={filters.company}
        onChange={(event) => handleInputChange(event, "company")}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Location"
        variant="outlined"
        value={filters.location}
        onChange={(event) => handleInputChange(event, "location")}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Skills"
        variant="outlined"
        value={filters.skills}
        onChange={(event) => handleInputChange(event, "skills")}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Position"
        variant="outlined"
        value={filters.position}
        onChange={(event) => handleInputChange(event, "position")}
        fullWidth
        margin="normal"
      />
      <Button
        variant="header"
        sx={{ marginTop: "10px" }}
        color="primary"
        onClick={handleFilterSubmit}
      >
        Apply Filters
      </Button>
    </div>
  );
};

export default FilterSidebar;
