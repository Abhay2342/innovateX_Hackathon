import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";

const JobListingCard = ({
  jobTitle,
  company,
  location,
  description,
  applyLink,
}) => {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2">
          {jobTitle}
        </Typography>
        <Typography color="textSecondary" gutterBottom>
          {company} - {location}
        </Typography>
        <Typography variant="body2" component="p">
          {description}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          href={applyLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Apply Now
        </Button>
      </CardContent>
    </Card>
  );
};

export default JobListingCard;
