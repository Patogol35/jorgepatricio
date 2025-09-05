import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // Azul principal
    },
    secondary: {
      main: "#424242", // Gris oscuro
    },
  },
  typography: {
    fontFamily: "Poppins, Roboto, sans-serif",
    h2: {
      fontWeight: 700,
    },
    h4: {
      fontWeight: 600,
    },
  },
});

export default theme;
