import React from "react";
import {
  Container,
  Grid,
  Paper,
  TextField,
  Button,
  Typography,
  Divider,
  Link,
  MenuItem,
  Select,
  InputLabel,
} from "@mui/material";
import GoogleIcon from "../../assets/google.svg";
import TwitterIcon from "../../assets/twitter.svg";
import LinkedInIcon from "../../assets/linkedin.svg";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { useState } from "react";
import { CircularProgress } from "@mui/material";
const SignUpPage = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const [loading, setLoading] = useState(false);
  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleLogoClick = () => {
    navigate("/");
  };

  const handleSignUpSubmit = async (event) => {
    event.preventDefault();

    // const formData = new FormData(event.target);
    // const formObject = {};
    // formData.forEach((value, key) => {
    //   formObject[key] = value;
    // });

    // try {
    //   setLoading(true);
    //   const response = await fetch(
    //     "https://get-my-news-server.onrender.com/signup",
    //     // "http://localhost:3000/signup",
    //     {
    //       method: "PUT",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify(formObject),
    //     }
    //   );

    //   console.log("Sign Up response:", response);

    //   if (response.ok) {
    //     // Handle successful sign-up, e.g., redirect to a confirmation page
    //     console.log("User Created");
    //     setLoading(false);
    //     navigate("/login");
    //   } else {
    //     // Handle unsuccessful sign-up, show an error message, etc.
    //     console.error("Sign Up failed");
    //     let data = await response.text();
    //     console.log(data);
    //     setLoading(false);
    //   }
    // } catch (error) {
    //   console.error("Error during Sign Up:", error);
    //   setLoading(false);
    // }
  };

  return (
    <Container maxWidth="lg">
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        style={{ height: "100%" }}
      >
        {/* Left Side with Image */}
        <Grid item xs={5}>
          {/* <img
            src={img} // replace with the path to your image
            alt="Login Page Image"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          /> */}
        </Grid>
        {/* Right Side with Login Form */}
        <Divider
          orientation="vertical"
          sx={{ marginX: "50px", borderRightWidth: 2 }}
          variant="middle"
          flexItem
        />

        <Grid
          item
          xs={5}
          sx={{ justifyContent: "center" }}
          justifyContent="center"
        >
          <Paper
            elevation={3}
            style={{
              padding: "20px",
              textAlign: "flex-start",
              border: "0px",
              boxShadow: "0px 0px 0px 0px",
            }}
          >
            <Button variant="text" onClick={handleLogoClick}>
              <Typography variant="h3" sx={{ marginBottom: "30px" }}>
                Career Campus
              </Typography>
            </Button>
            <form onSubmit={handleSignUpSubmit}>
              <TextField
                sx={{
                  background: "#FFFFFF",
                  margin: "5px 0px",
                  boxShadow: "3px 3px 0px rgba(0, 0, 0, 0.25)",
                  border: 1,
                }}
                label="Name"
                name="name"
                variant="outlined"
                fullWidth
                margin="normal"
                type="text"
                required
              />

              <Select
                fullWidth
                sx={{
                  background: "#FFFFFF",
                  margin: "5px 0px",
                  boxShadow: "3px 3px 0px rgba(0, 0, 0, 0.25)",
                  border: 1,
                }}
                labelId="user_type"
                id="user_type"
                value={"Choose Your Account Type"}
                label="user_type"
              >
                <MenuItem value={"Choose Your Account Type"}>
                  Choose Your Account Type
                </MenuItem>
                <MenuItem value={"Job Seeker"}>Job Seeker</MenuItem>
                <MenuItem value={"Employer"}>Employer</MenuItem>
              </Select>

              <TextField
                sx={{
                  background: "#FFFFFF",
                  margin: "5px 0px",
                  boxShadow: "3px 3px 0px rgba(0, 0, 0, 0.25)",
                  border: 1,
                }}
                name="email"
                label="EMAIL"
                variant="outlined"
                fullWidth
                margin="normal"
                type="email"
                required
              />
              <TextField
                sx={{
                  background: "#FFFFFF",
                  margin: "5px 0px",
                  boxShadow: "3px 3px 0px rgba(0, 0, 0, 0.25)",
                  border: 1,
                }}
                name="uname"
                label="USERNAME"
                variant="outlined"
                fullWidth
                margin="normal"
                type="text"
                required
              />
              <TextField
                sx={{
                  background: "#FFFFFF",
                  margin: "5px 0px",
                  border: 1,
                  boxShadow: "3px 3px 0px rgba(0, 0, 0, 0.25)",
                }}
                name="password"
                label="Password"
                variant="outlined"
                fullWidth
                margin="normal"
                type="password"
                required
              />
              <Grid
                container
                justifyContent="flex-start"
                alignItems="center"
                sx={{ paddingTop: "20px" }}
              >
                <Grid item>
                  <Typography variant="filter">
                    <Button
                      variant="text"
                      sx={{ fontWeight: 700, fontFamily: "Inika" }}
                      onClick={handleLoginClick}
                    >
                      <Link
                        href="/login"
                        color="inherit"
                        sx={{ color: "inherit", textDecoration: "underline" }}
                      >
                        Already a Member?{" "}
                        <span style={{ fontWeight: "bold" }}>LOG IN</span>
                      </Link>
                    </Button>
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                container
                justifyContent="space-between"
                alignItems="center"
                sx={{}}
              >
                <Grid item xs={6}>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    type="submit"
                    sx={{
                      backgroundColor: "#F24E1E",
                      fontFamily: "Inika",
                      borderRadius: "0px",
                      lineHeight: "2rem",
                      border: "12px",
                    }}
                  >
                    {loading ? (
                      <CircularProgress size={24} color="inherit" />
                    ) : (
                      "SignUP"
                    )}
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Grid
                    container
                    justifyContent="flex-end"
                    alignItems="center"
                    sx={{ paddingBottom: "5px", paddingTop: "5px" }}
                  >
                    <Grid item>
                      {/* Social Icons To Sign In Items */}
                      <img
                        src={GoogleIcon} // replace with the path to your image
                        alt="Google"
                        style={{
                          width: "40px",
                          height: "40px",
                          objectFit: "cover",
                        }}
                      />
                    </Grid>

                    <Grid item marginX={"15px"}>
                      <img
                        src={TwitterIcon} // replace with the path to your image
                        alt="Login Page Image"
                        style={{
                          width: "40px",
                          height: "37px",
                          objectFit: "cover",
                        }}
                      />
                    </Grid>

                    <Grid item>
                      <img
                        src={LinkedInIcon} // replace with the path to your image
                        alt="Login Page Image"
                        style={{
                          width: "37px",
                          height: "37px",
                          objectFit: "cover",
                        }}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SignUpPage;
