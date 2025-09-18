import { useState } from "react";
import {
  Box,
  Card,
  CardMedia,
  Typography,
  Modal,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const categories = [
  {
    title: "Bodas",
    cover: `${import.meta.env.BASE_URL}img/bodas1.jpg`,
    images: [
      `${import.meta.env.BASE_URL}img/bodas1.jpg`,
      `${import.meta.env.BASE_URL}img/bodas2.jpg`,
      `${import.meta.env.BASE_URL}img/bodas3.jpg`
    ],
  },
  {
    title: "Graduaciones",
    cover: `${import.meta.env.BASE_URL}img/graduaciones1.jpg`,
    images: [
      `${import.meta.env.BASE_URL}img/graduaciones1.jpg`,
      `${import.meta.env.BASE_URL}img/imagen2.PNG`
    ],
  },
  {
    title: "Cumpleaños",
    cover: `${import.meta.env.BASE_URL}img/imagen3.PNG`,
    images: [
      `${import.meta.env.BASE_URL}img/imagen3.PNG`,
      `${import.meta.env.BASE_URL}img/imagen3.PNG`,
      `${import.meta.env.BASE_URL}img/imagen3.PNG`
    ],
  },
  {
    title: "Eventos Empresariales",
    cover: `${import.meta.env.BASE_URL}img/eventos1.jpg`,
    images: [
      `${import.meta.env.BASE_URL}img/eventos1.jpg`,
      `${import.meta.env.BASE_URL}img/imagen1.PNG`
    ],
  },
];


// Flechas grandes fijas, sin animación ni hover
function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <Box
      className={className}
      sx={{
        ...style,
        display: "block",
        right: "-40px",
        zIndex: 10,
        fontSize: "4rem",
        color: "#FF69B4",
        textShadow: "0 0 6px #FF69B4",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <Box
      className={className}
      sx={{
        ...style,
        display: "block",
        left: "-40px",
        zIndex: 10,
        fontSize: "4rem",
        color: "#FF69B4",
        textShadow: "0 0 6px #FF69B4",
      }}
      onClick={onClick}
    />
  );
}

export default function GaleriaPage() {
  const [open, setOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<
    typeof categories[0] | null
  >(null);

  const handleOpen = (category: typeof categories[0]) => {
    setSelectedCategory(category);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedCategory(null);
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <Box
      sx={{
        flex: 1,
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        position: "relative",
        backgroundImage: `url(${import.meta.env.BASE_URL}img/hero.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        py: 6,
      }}
    >
      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          bgcolor: "rgba(0,0,0,0.5)",
          zIndex: 1,
        }}
      />

      {/* Grid de categorías */}
      <Box sx={{ position: "relative", zIndex: 2, width: "100%", px: 2 }}>
        <Typography
          variant="h2"
          sx={{
            color: "white",
            textShadow: "2px 2px 8px rgba(0,0,0,0.7)",
            textAlign: "center",
            mb: 4,
          }}
        >
          Galería
        </Typography>

        <Box
          sx={{
            display: "grid",
            gap: 3,
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "repeat(4, 1fr)" },
          }}
        >
          {categories.map((cat, index) => (
            <Card
              key={index}
              onClick={() => handleOpen(cat)}
              sx={{
                position: "relative",
                overflow: "hidden",
                borderRadius: 3,
                cursor: "pointer",
                backdropFilter: "blur(8px)",
                backgroundColor: "rgba(255,255,255,0.15)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
                transition: "transform 0.3s ease, box-shadow 0.3s",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: "0 6px 30px rgba(0,0,0,0.3)",
                  "& img": { transform: "scale(1.1)" },
                },
              }}
            >
              <CardMedia
                component="img"
                height="250"
                image={cat.cover}
                alt={cat.title}
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
                  bgcolor: "rgba(0,0,0,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  opacity: 0,
                  transition: "opacity 0.5s ease",
                  "&:hover": { opacity: 1 },
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ color: "white", fontWeight: "bold" }}
                >
                  {cat.title}
                </Typography>
              </Box>
            </Card>
          ))}
        </Box>
      </Box>

      {/* Modal */}
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            textAlign: "center",
            p: 2,
            mt: 8, // margen superior
            mx: "auto",
            borderRadius: 3,
            boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
            backgroundColor: "rgba(255,255,255,0.15)",
            backdropFilter: "blur(8px)",
            color: "#F28CA4",
            maxWidth: "60%",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
            <Typography variant="h4">{selectedCategory?.title || ""}</Typography>
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Box>

          {selectedCategory && (
            <Slider {...sliderSettings}>
              {selectedCategory.images.map((img, idx) => (
                <Box key={idx} sx={{ textAlign: "center" }}>
                  <img
                    src={img}
                    alt={`slide-${idx}`}
                    style={{
                      maxHeight: "60vh",
                      maxWidth: "100%",
                      borderRadius: "12px",
                      margin: "0 auto",
                      display: "block",
                    }}
                  />
                </Box>
              ))}
            </Slider>
          )}
        </Box>
      </Modal>
    </Box>
  );
}
