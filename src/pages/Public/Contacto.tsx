import { Box, Card, CardContent, Typography, TextField, Button, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useState } from "react";

export default function ContactoPage() {
  const [form, setForm] = useState({ nombre: "", email: "", mensaje: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const numero = "5491123456789"; // Tu número de WhatsApp con código de país
    const mensaje = `Nombre: ${form.nombre}%0AEmail: ${form.email}%0AMensaje: ${form.mensaje}`;

    // Abrir WhatsApp en nueva ventana con mensaje prellenado
    window.open(`https://wa.me/${numero}?text=${mensaje}`, "_blank");

    // Limpiar formulario
    setForm({ nombre: "", email: "", mensaje: "" });
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundImage: `url(${import.meta.env.BASE_URL}img/caramelos-fondo.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        py: 6,
      }}
    >
      {/* Overlay oscuro */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          bgcolor: "rgba(41, 40, 40, 0.5)",
          zIndex: 1,
        }}
      />

      {/* Contenido sobre el overlay */}
      <Box sx={{ position: "relative", zIndex: 2, width: "100%", px: 2, maxWidth: 600 }}>
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{
            color: "#F28CA4",
            WebkitTextStroke: "0.5px black",
            mb: 4,
          }}
        >
          Contáctanos
        </Typography>

        <Card
          sx={{
            p: 3,
            borderRadius: 3,
            boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
            backgroundColor: "rgba(255,255,255,0.15)",
            backdropFilter: "blur(8px)",
            color: "#F28CA4",
            mb: 4,
          }}
        >
          <CardContent>
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Nombre"
                name="nombre"
                value={form.nombre}
                onChange={handleChange}
                sx={{ mb: 2, input: { color: "#F28CA4" }, label: { color: "#F28CA4" } }}
                variant="outlined"
              />
              <TextField
                fullWidth
                label="Email"
                name="email"
                value={form.email}
                onChange={handleChange}
                sx={{ mb: 2, input: { color: "#F28CA4" }, label: { color: "#F28CA4" } }}
                variant="outlined"
              />
              <TextField
                fullWidth
                label="Mensaje"
                name="mensaje"
                value={form.mensaje}
                onChange={handleChange}
                sx={{ mb: 2, input: { color: "#F28CA4" }, label: { color: "#F28CA4" } }}
                variant="outlined"
                multiline
                rows={4}
              />
              <Button type="submit" variant="contained" color="secondary" fullWidth>
                Enviar por WhatsApp
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Redes sociales */}
        <Box
          sx={{
            p: 3,
            borderRadius: 3,
            boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
            backgroundColor: "rgba(255,255,255,0.15)",
            backdropFilter: "blur(8px)",
            color: "#F28CA4",
            mb: 4,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 3,
          }}
        >
          <IconButton
            href="https://www.facebook.com"
            target="_blank"
            sx={{ color: "#F28CA4", fontSize: 70 }}
          >
            <FacebookIcon fontSize="inherit" />
          </IconButton>
          <IconButton
            href="https://www.instagram.com"
            target="_blank"
            sx={{ color: "#F28CA4", fontSize: 70 }}
          >
            <InstagramIcon fontSize="inherit" />
          </IconButton>
          <IconButton
            href="https://wa.me/5491123456789"
            target="_blank"
            sx={{ color: "#F28CA4", fontSize: 70 }}
          >
            <WhatsAppIcon fontSize="inherit" />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}
