// src/components/Galeria/Galeria.tsx
import { Box, Card, CardMedia, Typography } from "@mui/material";

const images = [
  { src: "/img/imagen1.PNG", title: "Bodas" },
  { src: "/img/imagen1.PNG", title: "Graduaciones" },
  { src: "/img/imagen3.PNG", title: "Cumpleaños" },
  { src: "/img/imagen3.PNG", title: "Eventos Empresariales" },
];

export default function Galeria() {
  return (
    <Box sx={{ p: 4 }}>
      <Typography
          variant="h2"
          sx={{
            color: "white",
            textShadow: "2px 2px 8px rgba(0,0,0,0.7)",
            textAlign: "center",
            position: "relative",
            zIndex: 1,
          }}
        >
          Galeria
        </Typography>

      <Box
        sx={{
          display: "grid",
          gap: 3,
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr",
            md: "repeat(4, 1fr)",
          },
        }}
      >
        {images.map((img, index) => (
          <Card
            key={index}
            sx={{
              position: "relative",
              overflow: "hidden",
              borderRadius: 3,
              boxShadow: 4,
              cursor: "pointer",
              "&:hover .overlay": { opacity: 1 },
              "&:hover img": { transform: "scale(1.1)" },
            }}
          >
            <CardMedia
              component="img"
              height="250"
              image={img.src}
              alt={img.title}
              sx={{ transition: "transform 0.5s ease" }}
            />
            <Box
              className="overlay"
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                bgcolor: "rgba(0,0,0,0.5)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                opacity: 0,
                transition: "opacity 0.5s ease",
              }}
            >
              <Typography variant="h6" sx={{ color: "white", fontWeight: "bold" }}>
                {img.title}
              </Typography>
            </Box>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
