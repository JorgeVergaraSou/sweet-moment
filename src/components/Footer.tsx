// src/components/Footer.tsx
import { Box, Typography, Link } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        bgcolor: "primary.main",
        color: "white",
        py: 4,
        mt: 0,
        textAlign: "center",
      }}
    >
      <Typography variant="body1">© 2025 Sweet Moment Candy Bar</Typography>
      <Typography variant="body2" sx={{ mt: 1 }}>
        Síguenos en{" "}
        <Link href="https://wa.me/123456789" target="_blank" sx={{ color: "white", fontWeight: "bold" }}>
          WhatsApp
        </Link>
      </Typography>
    </Box>
  );
}
