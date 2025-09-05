import { Container, Typography, Button, Box } from "@mui/material";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  return (
    <Container sx={{ textAlign: "center", py: 10 }}>
      <Typography variant="h2" gutterBottom>
        Hola, soy <span style={{ color: "#1976d2" }}>Jorge</span> 👋
      </Typography>
      <Typography variant="h6" color="text.secondary" gutterBottom>
        Desarrollador Web | Django | React
      </Typography>

      <Box sx={{ mt: 4 }}>
        <Button
          variant="contained"
          size="large"
          startIcon={<Mail size={20} />}
          href="mailto:andres@email.com"
          sx={{ mx: 1, borderRadius: "50px" }}
        >
          Contáctame
        </Button>
        <Button
          variant="outlined"
          size="large"
          startIcon={<Github size={20} />}
          href="https://github.com/tuusuario"
          target="_blank"
          sx={{ mx: 1, borderRadius: "50px" }}
        >
          GitHub
        </Button>
        <Button
          variant="outlined"
          size="large"
          startIcon={<Linkedin size={20} />}
          href="https://linkedin.com/in/tuusuario"
          target="_blank"
          sx={{ mx: 1, borderRadius: "50px" }}
        >
          LinkedIn
        </Button>
      </Box>
    </Container>
  );
}
