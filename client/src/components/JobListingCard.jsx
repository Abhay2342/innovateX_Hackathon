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
    <Card variant="elevation">
      <CardContent sx={{ padding: "30px" }}>
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
          sx={{ marginTop: 3 }}
          variant="text"
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
