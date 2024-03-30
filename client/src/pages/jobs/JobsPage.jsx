import React, { useState } from "react";
import { useContext } from "react";
import img from "../../assets/preview.png";

import {
  Container,
  Grid,
  Paper,
  TextField,
  Button,
  Typography,
  Divider,
  Link,
  CircularProgress, // Import CircularProgress for the loading spinner
} from "@mui/material";
import GoogleIcon from "../../assets/google.svg";
import TwitterIcon from "../../assets/twitter.svg";
import LinkedInIcon from "../../assets/linkedin.svg";
import { useNavigate } from "react-router-dom"; // Import useNavigate
// import { useUser } from "../../components/UserContext";
const JobsPage = () => {
  const navigate = useNavigate();
  // const { user, loginUser } = useUser(); // Destructure user and loginUser from useUser

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); // State to manage loading spinner

  // Handler for login button click
  const handleSignUpClick = () => {
    navigate("/signup");
  };

  const handleLogoClick = () => {
    navigate("/");
  };

  const handleUsernameChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLoginSubmit = async (event) => {
    event.preventDefault();

    // try {
    //   setLoading(true);

    //   const response = await fetch(
    //     // "https://innovate-x-hackathon.vercel.app/login",
    //     "http://localhost:3000/login",
    //     {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify({
    //         email,
    //         password,
    //       }),
    //     }
    //   );

    //   if (response.ok) {
    //     const userData = await response.json();
    //     console.log("Logged IN");
    //     // Update user context with email and other user data
    //     // loginUser(userData);
    //     // console.log(userData[0]);
    //     // console.log(JSON.stringify(userData));
    //     // localStorage.setItem("user", JSON.stringify(userData[0]));
    //     // localStorage.setItem(
    //     //   "userCollection",
    //     //   JSON.stringify(userData[1].collection)
    //     // );
    //     // localStorage.setItem("isLoggedIn", "true");

    //     // setLoading(false);
    //     // navigate("/profile-settings");
    //   } else {
    //     console.error("Login failed");
    //     setLoading(false);
    //   }
    // } catch (error) {
    //   console.error("Error during login:", error);
    //   setLoading(false);
    // }
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ height: "80vh" }}
    >
      {/* Left Side with Image */}
      <Grid item xs={3}>
        <img
          src={img} // replace with the path to your image
          alt="Login Page Image"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </Grid>
      {/* Right Side with Login Form */}
      <Divider
        orientation="vertical"
        sx={{ marginX: "30px", borderRightWidth: 2 }}
        variant="middle"
        flexItem
      />

      <Grid
        item
        xs={9}
        sx={{ justifyContent: "center" }}
        justifyContent="center"
      ></Grid>
    </Grid>
  );
};

export default JobsPage;
