import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiIconButton: {
      scroll: {
        innerHeight: "22px",
      },
    },
    MuiButton: {
      styleOverrides: {
        header: {
          padding: "12px 24px",
          color: "white",
          backgroundColor: "#003396",

          display: "block",
          fontWeight: 700,
          transition: "color .3s, background-color .3s",
          minWidth: "165px",
        },

        listingSearch: {
          padding: "12px 24px",
          paddingTop: "16px",
          paddingBottom: "16px",
          fontWeight: 600,
          fontSize: "16px",
          lineHeight: "150%",
          textAlign: "center",
          minWidth: "165px",
          transition: "white .3s, black .3s",
        },

        menu_header: {
          fontWeight: 900,
          color: "#2c2f32",
          paddingTop: "26px",
          paddingBottom: "26px",
          display: "block",
          cursor: "pointer",
          "&:hover": {
            // Define hover effect
            backgroundColor: "none",
            color: "white",
            transition: "background-color 0.3s ease, color 0.3s ease",
          },
        },

        contained: {
          color: "black",
          fontWeight: 600,
          ":hover": {
            color: "white",
          },
        },
      },
    },

    MuiSelect: {
      styleOverrides: {
        standard: {
          fontFamily: "Inika",
          textShadow: "0px 5px 4px rgba(0, 0, 0, 0.25)",
          fontWeight: 700,
          fontSize: "0.8rem",
          color: "#3F3A3B",
        },
        outlined: {
          fontFamily: "Inika",
          fontWeight: 700,
          fontSize: "0.8rem",
          color: "#3F3A3B",
        },
      },
    },

    MuiToolbar: {
      styleOverrides: {
        root: {
          // minHeight: "48px",
          "@media (min-width: 600px)": {
            minHeight: "48px",
          },
        },
      },
    },
  },
  palette: {
    primary: {
      // main: "#3F3A3B", // Change this to your primary color
      main: "#003396",
    },
    secondary: {
      main: "#000000", // Change this to your secondary color
    },

    error: {
      main: "#F24E1E",
    },

    background: {
      // paper: "#EAE5E1", // Background color for containers, cards, etc.
      // default: "#EAE5E1", // Default background color for the entire document
    },
  },

  typography: {
    color: "#003396",
    bannerH1: {
      fontFamily: "Prompt",
      "@media (max-width: 480px)": {
        maxWidth: "800px",
        fontWeight: 700,
        fontSize: "32px",
        lineHeight: "120%",
        textAlign: "start",
      },
      "@media (min-width: 481px) and (max-width: 900px)": {
        maxWidth: "800px",
        fontWeight: 700,
        fontSize: "32px",
        lineHeight: "120%",
        textAlign: "start",
      },
      "@media (min-width: 901px) and (max-width: 1920px)": {
        maxWidth: "800px",
        fontWeight: 700,
        fontSize: "60px",
        lineHeight: "120%",
        textAlign: "start",
      },
    },
    tagLine: {
      fontFamily: "Roboto",
      fontWeight: 700,
      fontSize: "24px",
      lineHeight: "120%",
      textAlign: "start",
      color: "#003396",
    },

    title: {
      fontFamily: "Inika",
      fontWeight: 700,
      fontSize: "2.2rem",
      color: "#3F3A3B",
    },
    inputTitle: {
      fontFamily: "Inika",
      color: "rgba(0, 0, 0, 0.60)",
      fontWeight: 700,
      fontSize: "1rem",
      textDecoration: "underline",
    },
  },
});

export default theme;
