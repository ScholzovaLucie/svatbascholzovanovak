import React, { useState, useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";

const Hero = ({ scrollToReservation }) => {
  const [daysLeft, setDaysLeft] = useState(0);

  useEffect(() => {
    // Funkce na výpočet zbývajících dnů
    const calculateDaysLeft = () => {
      const today = new Date();
      const weddingDate = new Date("2025-09-06");
      const timeDifference = weddingDate - today;
      const days = Math.ceil(timeDifference / (1000 * 60 * 60 * 24)); // Převod na dny
      setDaysLeft(days > 0 ? days : 0); // Zobrazit 0, pokud datum již uplynulo
    };

    calculateDaysLeft();

    // Aktualizace zbývajících dnů jednou denně
    const interval = setInterval(calculateDaysLeft, 1000 * 60 * 60 * 24);

    return () => clearInterval(interval); // Vyčištění intervalů
  }, []);

  return (
    <Box
      sx={{
        height: "95vh", // Zabírá celou výšku okna
        display: "flex", // Centrování obsahu
        flexDirection: "column",
        justifyContent: "end",
        alignItems: "center",
        textAlign: "center",
        paddingBottom: "20px",
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
      <Typography
        variant="h4"
        color="black"
        sx={{
          fontFamily: "'Playfair Display', serif",
          marginTop: "10px",
        }}
      >
        Zbývá {daysLeft} dní
      </Typography>
      <Button
        variant="contained"
        sx={{
          marginTop: "20px",
          padding: "10px 20px",
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 600,
          background: "rgba(255, 255, 255, 0.9)",
          color: "var(--chocolate-cosmos)",
        }}
        onClick={scrollToReservation} // Při kliknutí volá scroll funkci
      >
        Potvrdit účast
      </Button>
    </Box>
  );
};

export default Hero;