import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        textAlign: "center",
        py: 3,
        mt: 4,
        bgcolor: "primary.main",
        color: "white",
      }}
    >
      <Typography variant="body2">
        © {new Date().getFullYear()} Jorge | Todos los derechos reservados
      </Typography>
    </Box>
  );
}
