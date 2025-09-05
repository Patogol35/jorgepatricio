
import {
  Container,
  Typography,
  TextField,
  Button,
  Paper,
} from "@mui/material";
import { Email, Person } from "@mui/icons-material";

export default function Contact() {
  return (
    <Container id="contact" sx={{ py: 6 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: "16px", background: "#fafafa" }}>
        <Typography variant="h4" gutterBottom>
          📩 Contáctame
        </Typography>
        <form>
          <TextField
            fullWidth
            label="Nombre"
            margin="normal"
            InputProps={{ startAdornment: <Person sx={{ mr: 1 }} /> }}
          />
          <TextField
            fullWidth
            label="Email"
            margin="normal"
            InputProps={{ startAdornment: <Email sx={{ mr: 1 }} /> }}
          />
          <TextField
            fullWidth
            label="Mensaje"
            multiline
            rows={4}
            margin="normal"
          />
          <Button variant="contained" size="large" sx={{ mt: 2 }}>
            Enviar
          </Button>
        </form>
      </Paper>
    </Container>
  );
}
