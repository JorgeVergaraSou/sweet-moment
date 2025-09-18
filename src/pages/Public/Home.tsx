
import { Box, Typography, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { FaConciergeBell, FaEnvelope, FaImages } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function Home() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const iconSize = "3rem";

  const items = [
    { icon: <FaConciergeBell />, link: "/servicios", label: "Servicios" },
    { icon: <FaEnvelope />, link: "/contacto", label: "Contacto" },
    { icon: <FaImages />, link: "/galeria", label: "Galería" },
  ];

  return (
    <Box sx={{ position: "relative", minHeight: "100vh", width: "100vw" }}>
      {/* Fondo animado con parallax */}
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          backgroundImage: `url(${import.meta.env.BASE_URL}img/hero.png)`,
          backgroundSize: "cover",
          backgroundPosition: `center ${offsetY * 0.3}px`,
          zIndex: -2,
          animation: "kenburns 20s ease-in-out infinite alternate",
          "&::after": {
            content: '""',
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(255,182,193,0.35)",
            animation: "glow 6s ease-in-out infinite",
          },
          "@keyframes kenburns": {
            "0%": { transform: "scale(1) translate(0,0)" },
            "100%": { transform: "scale(1.1) translate(2%, 2%)" },
          },
          "@keyframes glow": {
            "0%, 100%": { backgroundColor: "rgba(255,182,193,0.3)" },
            "50%": { backgroundColor: "rgba(255,182,193,0.6)" },
          },
        }}
      />

      {/* Hero content */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          px: 2,
        }}
      >
        {/* Iconos tipo card con tooltip */}
        <Stack direction="row" spacing={5} sx={{ mb: 6, justifyContent: "center" }}>
          {items.map((item, index) => (
            <Box
              key={index}
              component={Link}
              to={item.link}
              sx={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 100,
                height: 100,
                borderRadius: 3,
                backgroundColor: "rgba(255,255,255,0.15)",
                backdropFilter: "blur(8px)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
                transition: "transform 0.3s, box-shadow 0.3s",
                opacity: 0,
                transform: "translateY(20px)",
                animation: `
                  fadeUp 0.6s ease forwards ${1 + index * 0.3}s,
                  float 3s ease-in-out ${index * 0.5}s infinite
                `,
                "&:hover": {
                  transform: "scale(1.2) translateY(-5px)",
                  boxShadow: "0 8px 30px rgba(255,255,255,0.7)",
                  "& .tooltip": {
                    opacity: 1,
                    transform: "translateY(0)",
                  },
                },
                "@keyframes fadeUp": {
                  "0%": { opacity: 0, transform: "translateY(20px)" },
                  "100%": { opacity: 1, transform: "translateY(0)" },
                },
                "@keyframes float": {
                  "0%": { transform: "translateY(0)" },
                  "50%": { transform: "translateY(-10px)" },
                  "100%": { transform: "translateY(0)" },
                },
              }}
            >
              {/* Icono */}
              <Box sx={{ fontSize: iconSize, color: "white" }}>{item.icon}</Box>

              {/* Tooltip */}
              <Box
                className="tooltip"
                sx={{
                  position: "absolute",
                  bottom: -30,
                  backgroundColor: "rgba(0,0,0,0.6)",
                  color: "white",
                  px: 2,
                  py: 0.5,
                  borderRadius: 2,
                  fontSize: "0.8rem",
                  opacity: 0,
                  pointerEvents: "none",
                  transition: "opacity 0.3s, transform 0.3s",
                  transform: "translateY(5px)",
                  whiteSpace: "nowrap",
                }}
              >
                {item.label}
              </Box>
            </Box>
          ))}
        </Stack>

        {/* Texto descriptivo tipo frosted glass */}
        <Box
          sx={{
            maxWidth: 700,
            color: "#F28CA4", // color del texto
           
            WebkitTextStroke: "0.5px black", // borde negro alrededor del texto
            opacity: 0,
            animation: "fadeUpText 1s ease forwards 2.2s",
            "@keyframes fadeUpText": {
              "0%": { opacity: 0, transform: "translateY(20px)" },
              "100%": { opacity: 1, transform: "translateY(0)" },
            },
            backgroundColor: "rgba(255, 255, 255, 0.15)",
            backdropFilter: "blur(8px)",
            borderRadius: 3,
            p: 4,
            textAlign: "center",
            boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
            mx: "auto",
          }}
        >
          <Typography variant="h3" gutterBottom>
            Sweet Moment Candy Bar
          </Typography>
          <Typography variant="body1">
            Nos dedicamos a crear momentos dulces e inolvidables con nuestros
            candy bars personalizados para cada ocasión. Calidad, creatividad y
            sabor se combinan para hacer de tu evento un momento único.
          </Typography>
        </Box>
      </Box>

      {/* Sección adicional tipo card */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          justifyContent: "center",
          pt: 8,
          pb: 12,
        }}
      >
        <Box
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.15)",
            backdropFilter: "blur(8px)",
            borderRadius: 3,
            p: 4,
            maxWidth: 600,
            textAlign: "center",
            
            
            color: "#F28CA4", // color del texto
            WebkitTextStroke: "0.5px black", // borde negro alrededor del texto
            boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
          }}
        >
          <Typography variant="h3" gutterBottom>
            ¿Por qué elegirnos?
          </Typography>
          <Typography variant="body1">
            En Sweet Moment Candy Bar, cuidamos cada detalle para que tu evento
            sea especial. Desde la decoración hasta la selección de sabores, te
            ofrecemos una experiencia única que tus invitados recordarán.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
