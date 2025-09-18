import { Box, Card, CardContent, Typography } from "@mui/material";
import CakeIcon from "@mui/icons-material/Cake";
import CelebrationIcon from "@mui/icons-material/Celebration";
import SchoolIcon from "@mui/icons-material/School";

const servicios = [
  {
    icon: <CakeIcon sx={{ fontSize: 50, color: "secondary.main" }} />,
    titulo: "Bodas",
    descripcion: "Mesas dulces elegantes para tu gran día.",
  },
  {
    icon: <SchoolIcon sx={{ fontSize: 50, color: "secondary.main" }} />,
    titulo: "Graduaciones",
    descripcion: "Celebra tu logro con un candy bar único.",
  },
  {
    icon: <CelebrationIcon sx={{ fontSize: 50, color: "secondary.main" }} />,
    titulo: "Fiestas",
    descripcion: "Personalizamos tu candy bar para cualquier ocasión.",
  },
];

export default function Servicios() {
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
      <Box sx={{ position: "relative", zIndex: 2, width: "100%", px: 2 }}>
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
          Nuestros Servicios
        </Typography>

        <Box
          sx={{
            display: "grid",
            gap: 3,
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "repeat(3, 1fr)" },
          }}
        >
          {servicios.map((srv, idx) => (
            <Card
              key={idx}
              sx={{
                textAlign: "center",
                p: 3,
                borderRadius: 3,
                boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
                transition: "transform 0.3s ease",
                "&:hover": { transform: "translateY(-8px)" },
                backgroundColor: "rgba(255,255,255,0.15)", // frosted glass
                backdropFilter: "blur(8px)",
                color: "#F28CA4",
                animation: `float 3s ease-in-out ${idx * 0.5}s infinite`,
                "@keyframes float": {
                  "0%": { transform: "translateY(0)" },
                  "50%": { transform: "translateY(-10px)" },
                  "100%": { transform: "translateY(0)" },
                },
              }}
            >
              <CardContent>
                {srv.icon}
                <Typography variant="h3" sx={{ mt: 2 }}>
                  {srv.titulo}
                </Typography>
                <Typography variant="body1" sx={{ mt: 1 }}>
                  {srv.descripcion}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
