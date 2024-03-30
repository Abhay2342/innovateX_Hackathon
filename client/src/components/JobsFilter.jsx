import React from "react";
import { TextField, Button, Grid, Typography } from "@mui/material";

const FilterSidebar = ({ filters, setFilters, handleFilterSubmit }) => {
  const handleInputChange = (event, filterKey) => {
    const updatedFilters = { ...filters, [filterKey]: event.target.value };
    setFilters(updatedFilters);
  };

  const handleJobCreation = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const formObject = {};
    formData.forEach((value, key) => {
      formObject[key] = value;
    });
    console.log(formData);
    try {
      const response = await fetch(
        `https://innovatex-hackathon.onrender.com/jobs`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formObject),
        }
      );

      console.log("response:", response);

      if (response.ok) {
        let newData = await response.json();

        newData = JSON.stringify(newData);
        console.log(newData);
        localStorage.setItem("user", newData);

        console.log("Details Updated");
      } else {
        // Handle unsuccessful sign-up, show an error message, etc.
        console.error("User Updation failed");
        let data = await response.text();
        console.log(data);
      }
    } catch (error) {
      console.error("Error during details updation:", error);
    }
  };

  return (
    <form onSubmit={handleJobCreation}>
      <Typography variant="h6" gutterBottom>
        Filters
      </Typography>
      <TextField
        name="company"
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
        name="location"
        value={filters.location}
        onChange={(event) => handleInputChange(event, "location")}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Skills"
        variant="outlined"
        name="skills"
        value={filters.skills}
        onChange={(event) => handleInputChange(event, "skills")}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Position"
        variant="outlined"
        name="position"
        value={filters.position}
        onChange={(event) => handleInputChange(event, "position")}
        fullWidth
        margin="normal"
      />
      <Button
        variant="header"
        sx={{ marginTop: "10px" }}
        color="primary"
        type="submit"
      >
        Apply Filters
      </Button>
    </form>
  );
};

export default FilterSidebar;
