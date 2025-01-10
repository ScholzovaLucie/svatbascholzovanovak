import React from "react";
import { Box, Typography, Button } from "@mui/material";

const Hero = ({scrollToReservation}) => (
  <Box
    sx={{
      height: "100vh", // Zabírá celou výšku okna
      display: "flex", // Centrování obsahu
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      color: "white",
      background: "linear-gradient(to bottom, var(--chocolate-cosmos), var(--buff))",
    }}
  >
    <Typography
      variant="h2"
      gutterBottom
      sx={{
        fontFamily: "'Playfair Display', serif",
        fontWeight: 700,
      }}
    >
      Lucie Scholzová 
    </Typography>
    <Typography
      variant="h2"
      gutterBottom
      sx={{
        fontFamily: "'Playfair Display', serif",
        fontWeight: 700,
      }}
    >
       & 
    </Typography>
    <Typography
      variant="h2"
      gutterBottom
      sx={{
        fontFamily: "'Playfair Display', serif",
        fontWeight: 700,
      }}
    >
       Jaroslav Novák
    </Typography>
    <Typography
      variant="h5"
      sx={{
        fontFamily: "'Poppins', sans-serif",
        fontWeight: 300,
      }}
    >
      06. 09. 2025
    </Typography>
    <Button
      variant="contained"
      color="secondary"
      sx={{
        marginTop: "20px",
        padding: "10px 20px",
        fontFamily: "'Poppins', sans-serif",
        fontWeight: 600,
      }}
      onClick={scrollToReservation} // Při kliknutí volá scroll funkci
    >
      Rezervovat místo
    </Button>
  </Box>
);

export default Hero;