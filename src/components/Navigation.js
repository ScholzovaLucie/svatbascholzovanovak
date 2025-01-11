import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

const Navigation = ({ scrollToSection }) => {
  const menuItems = [
    { label: "O nás", section: "about" },
    { label: "Místo", section: "location" },
    { label: "Harmonogram", section: "schedule" },
    { label: "Dresscode", section: "dresscode" },
    { label: "Důležité osoby", section: "importantPeople" },
    { label: "Galerie", section: "gallery" },
    { label: "Seznam Hostů", section: "guestList" },
    { label: "Rezervace", section: "reservation" },
  ];

  return (
    <AppBar
      position="sticky"
      sx={{
        display: { xs: "none", md: "block" },
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(3px)", // Moderní rozostření
        padding: "2px 0",
        transition: "background-color 0.3s ease",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "1200px",
          margin: "0 auto",
          width: "100%",
        }}
      >
        <Typography
          variant="h6"
          onClick={() => scrollToSection("hero")} // Plynulé scrollování na vrchol stránky
          sx={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            color: "var(--chocolate-cosmos)",
            cursor: "pointer", // Ikona kurzoru pro indikaci klikatelnosti
            "&:hover": {
              color: "var(--cinnabar)", // Jemný efekt při hoveru
            },
          }}
        >
          Svatba Lucka & Jára
        </Typography>
        <Box>
          {menuItems.map((item) => (
            <Button
              key={item.section}
              onClick={() => scrollToSection(item.section)}
              sx={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: "16px",
                fontWeight: 500,
                color: "var(--chocolate-cosmos)",
                textTransform: "capitalize",
                marginLeft: "15px",
                position: "relative",
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