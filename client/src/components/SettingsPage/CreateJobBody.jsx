// CategoryList.js
import React, { useEffect } from "react";
import {
  Avatar,
  Grid,
  Typography,
  Button,
  TextField,
  Link,
} from "@mui/material";
import { useState } from "react";
const CreateJobBody = ({}) => {
  // let userData = JSON.parse(localStorage.getItem("user"));
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("user"))
  );

  const handleJobCreation = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const formObject = {};
    formData.forEach((value, key) => {
      formObject[key] = value;
    });
    console.log(formData);
    try {
      const response = await fetch(`http://localhost:3000/login/add-jobs`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formObject),
      });

      console.log("response:", response);

      if (response.ok) {
        let newData = await response.json();
        newData = JSON.stringify(newData);
        localStorage.setItem("user", newData);
        // userData = await JSON.parse(userData);
        // localStorage.setItem("user", userData);
        setUserData(JSON.parse(newData));
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
      <Grid container rowSpacing={5}>
        <Grid item container spacing={1}>
          <Grid
            item
            container
            justifyContent={"flex-start"}
            justifyItems={"center"}
            xs={6}
          >
            <Typography
              variant="filter"
              sx={{ borderBottom: 2, fontSize: "1.5rem" }}
            >
              CREATE JOB
            </Typography>
          </Grid>

          <Grid item container spacing={5}>
            <Grid item xs={6}>
              <Typography variant="inputTitle">POSITION</Typography>
              <TextField
                sx={{
                  background: "#FFFFFF",
                  margin: "0px 0px",
                  boxShadow: "3px 3px 0px rgba(0, 0, 0, 0.25)",
                  border: 1,
                }}
                label="APP DEVELOPER"
                variant="outlined"
                fullWidth
                margin="normal"
                type="text"
                name="position"
              />
            </Grid>

            <Grid item xs={6}>
              <Typography variant="inputTitle">COMPANY NAME</Typography>
              <TextField
                sx={{
                  background: "#FFFFFF",
                  margin: "0px 0px",
                  boxShadow: "3px 3px 0px rgba(0, 0, 0, 0.25)",
                  border: 1,
                }}
                label="AMAZON"
                variant="outlined"
                fullWidth
                margin="normal"
                type="text"
                name="company"
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid item container spacing={1}>
          <Grid item xs={12}>
            <Typography variant="inputTitle">JOB DESCRIPTION</Typography>
            <TextField
              sx={{
                background: "#FFFFFF",
                margin: "0px 0px",
                boxShadow: "3px 3px 0px rgba(0, 0, 0, 0.25)",
                border: 1,
              }}
              name="description"
              label=""
              variant="outlined"
              fullWidth
              multiline
              margin="normal"
              type="text"
              rows={5}
            />
            <Grid item xs={12}>
              <Typography variant="inputTitle">SALARY</Typography>
              <TextField
                sx={{
                  background: "#FFFFFF",
                  margin: "0px 0px",
                  boxShadow: "3px 3px 0px rgba(0, 0, 0, 0.25)",
                  border: 1,
                }}
                label="$1000"
                variant="outlined"
                fullWidth
                margin="normal"
                type="text"
                name="salary"
              />
            </Grid>
          </Grid>

          <Grid item container spacing={1}>
            <Grid item xs={12}>
              <Typography variant="inputTitle">LOCATION</Typography>
              <TextField
                sx={{
                  background: "#FFFFFF",
                  margin: "0px 0px",
                  boxShadow: "3px 3px 0px rgba(0, 0, 0, 0.25)",
                  border: 1,
                }}
                label="Madhya Pradesh, India"
                variant="outlined"
                fullWidth
                margin="normal"
                type="text"
                name="location"
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid item container>
          <Grid item xs={12}>
            <Typography variant="inputTitle">SKILLS</Typography>
            <TextField
              sx={{
                background: "#FFFFFF",
                margin: "0px 0px",
                boxShadow: "3px 3px 0px rgba(0, 0, 0, 0.25)",
                border: 1,
              }}
              // label={userData.apikey}
              label="MERN, MEAN, DOCKER"
              variant="outlined"
              fullWidth
              margin="normal"
              type="text"
              name="skills"
            />
          </Grid>
          <Grid item container justifyContent={"space-between"}>
            <Grid item>
              <Typography variant="filter">
                <Button
                  variant="text"
                  sx={{ fontWeight: 700 }}
                  //   onClick={}
                >
                  <Link
                    href="/login"
                    color="inherit"
                    sx={{ color: "inherit", textDecoration: "underline" }}
                  >
                    Don't Need This Account?{" "}
                    <span style={{ fontWeight: "bold", color: "#F24E1E" }}>
                      DELETE USER
                    </span>{" "}
                  </Link>
                </Button>
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item container>
          <Grid item>
            <Button
              variant="contained"
              type="submit"
              sx={{
                backgroundColor: "#F24E1E",
                borderRadius: "0px",
                boxShadow: "3px 3px 0px rgba(0, 0, 0, 0.25)",
                border: 1,
                borderColor: "black",
              }}
            >
              SAVE CHANGES
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
};

export default CreateJobBody;
