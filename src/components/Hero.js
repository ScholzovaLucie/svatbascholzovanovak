import React from "react";
import { Box, Typography, Button } from "@mui/material";

const Hero = ({scrollToReservation}) => (
  <Box
    sx={{
      height: "90vh", // Zabírá celou výšku okna
      display: "flex", // Centrování obsahu
      flexDirection: "column",
      justifyContent: "end",
      alignItems: "center",
      textAlign: "center",
    }}
  >
    <Typography
      variant="h2"
      color="black"
      sx={{
        fontFamily: "'Playfair Display', serif",
      }}
    >
      06. 09. 2025
    </Typography>
    <Button
      variant="contained"
      sx={{
        marginTop: "20px",
        padding: "10px 20px",
        fontFamily: "'Poppins', sans-serif",
        fontWeight: 600,
        background: "rgba(255, 255, 255, 0.9)",
        color: "var(--chocolate-cosmos)"
      }}
      onClick={scrollToReservation} // Při kliknutí volá scroll funkci
    >
      Potvrdit účast
    </Button>
  </Box>
);

export default Hero;