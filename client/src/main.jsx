import React from "react";
import App from "./App.jsx";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import { CssBaseline } from "@mui/material/";
const root = document.getElementById("root");
const reactRoot = createRoot(root);
reactRoot.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
