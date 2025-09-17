// src/theme/theme.ts
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#F28CA4", // Rosa fuerte
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#F4A6B9", // Rosa medio
    },
    background: {
      default: "#F8DDE1", // Rosa pastel
      paper: "#FFFFFF",
    },
    text: {
      primary: "#4A2C2A", // Marrón oscuro
      secondary: "#F28CA4",
    },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif", // fuente principal
    h1: { fontFamily: "'Pacifico', cursive", fontWeight: 700 },
    h2: { fontFamily: "'Pacifico', cursive", fontWeight: 600 },
    h3: { fontFamily: "'Pacifico', cursive", fontWeight: 500 },
    h4: { fontFamily: "'Poppins', sans-serif", fontWeight: 500 },
    body1: { fontFamily: "'Poppins', sans-serif", fontWeight: 700 },
    button: { fontFamily: "'Poppins', sans-serif", fontWeight: 600 },
  },
  shape: {
    borderRadius: 16,
  },
});

export default theme;
