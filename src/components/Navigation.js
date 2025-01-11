import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

const Navigation = ({ scrollToSection }) => {
  const menuItems = [
    { label: "O nás", section: "about" },
    { label: "Místo", section: "location" },
    { label: "Harmonogram", section: "schedule" },
    { label: "Doprava a ubytování", section: "travel" },
    { label: "Dresscode", section: "dresscode" },
    { label: "Důležité osoby", section: "importantPeople" },
    { label: "Galerie", section: "gallery" },
    { label: "Tipy na dary", section: "gifts" },
    { label: "Seznam Hostů", section: "guestList" },
    { label: "Potvrzení účasti", section: "reservation" },
  ];

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(3px)",
        padding: "5px 0",
        transition: "background-color 0.3s ease",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          flexWrap: "wrap", // Tlačítka se zalomí na další řádek
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "95vw", // Maximální šířka obsahu
          margin: "0 auto",
          width: "100%",
        }}
      >
        <Typography
          variant="h6"
          onClick={() => scrollToSection("hero")}
          sx={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            color: "var(--chocolate-cosmos)",
            cursor: "pointer",
            "&:hover": {
              color: "var(--cinnabar)",
            },
          }}
        >
          Svatba Lucka&nbsp;&&nbsp;Jára
        </Typography>
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            flexWrap: "wrap", // Zalomení tlačítek na menších obrazovkách
            gap: "10px", // Větší mezery mezi tlačítky
            justifyContent: "center",
          }}
        >
          {menuItems.map((item) => (
            <Button
              key={item.section}
              onClick={() => scrollToSection(item.section)}
              sx={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: "14px", // Zmenšené písmo
                fontWeight: 500,
                color: "var(--chocolate-cosmos)",
                textTransform: "capitalize",
                position: "relative",
                padding: "5px 10px", // Menší padding tlačítek
                "&:after": {
                  content: '""',
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: 0,
                  height: "2px",
                  backgroundColor: "var(--cinnabar)",
                  transition: "width 0.3s ease",
                },
                "&:hover:after": {
                  width: "100%",
                },
              }}
            >
              {item.label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;