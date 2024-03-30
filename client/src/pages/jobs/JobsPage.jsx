import React, { useState, useEffect } from "react";
import { Grid, Divider } from "@mui/material";
import JobListingCard from "../../components/JobListingCard";
import FilterSidebar from "../../components/JobsFilter";
import { useNavigate } from "react-router-dom";

const JobsPage = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    company: "",
    location: "",
    skills: "",
    position: "",
  });

  // Handler for applying filters
  const handleFilterSubmit = () => {
    // Implement filter logic here to filter job listings based on filter values
    console.log("Applying filters:", filters);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/jobs`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          const fetchedData = await response.json();
          console.log(fetchedData);
          setData(fetchedData);
        } else {
          console.error("Failed to fetch jobs");
        }
      } catch (error) {
        console.error("Error during fetch:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      paddingY={2}
      style={{ height: "80vh" }}
    >
      <Grid item xs={3} alignSelf={"flex-start"} sx={{ marginX: "30px" }}>
        <FilterSidebar
          filters={filters}
          setFilters={setFilters}
          handleFilterSubmit={handleFilterSubmit}
        />
      </Grid>
      <Divider
        orientation="vertical"
        sx={{ borderRightWidth: 2 }}
        variant="middle"
        flexItem
      />

      <Grid
        item
        container
        xs={7}
        spacing={2}
        height={"80vh"}
        alignSelf={"flex-start"}
        sx={{ overflowY: "auto", paddingX: "30px" }}
      >
        {data.map((job, index) => (
          <Grid item xs={6} key={index}>
            <JobListingCard
              jobTitle={job.position}
              company={job.company}
              location={job.location}
              description={job.description}
              applyLink={job.applyLink}
            />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default JobsPage;
