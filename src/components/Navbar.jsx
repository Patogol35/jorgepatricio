import { AppBar, Toolbar, Button, Typography } from "@mui/material";

export default function Navbar() {
  return (
    <AppBar
      position="sticky"
      color="transparent"
      elevation={0}
      sx={{
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: "bold" }}>
          Andres Gamer
        </Typography>
        <Button color="inherit" href="#about">Sobre mí</Button>
        <Button color="inherit" href="#projects">Proyectos</Button>
        <Button color="inherit" href="#contact">Contacto</Button>
      </Toolbar>
    </AppBar>
  );
}
