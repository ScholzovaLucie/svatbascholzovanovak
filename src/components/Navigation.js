import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

const Navigation = ({ scrollToSection }) => {
  const menuItems = [
    { label: "Úvod", section: "hero" },
    { label: "O nás", section: "about" },
    { label: "Místo", section: "location" },
    { label: "Harmonogram", section: "schedule" },
    { label: "Dresscode", section: "dresscode" },
    { label: "Důležité osoby", section: "importantPeople" },
    { label: "Galerie", section: "gallery" },
    { label: "Rezervace", section: "reservation" },
  ];

  return (
    <AppBar
      position="sticky"
      sx={{
        display: { xs: "none", md: "block" }, // Skryj na mobilních zařízeních
        backgroundColor: "var(--chocolate-cosmos)",
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          sx={{ flexGrow: 1, fontFamily: "'Playfair Display', serif" }}
        >
          Svatba Lucka & Pavel
        </Typography>
        <Box>
          {menuItems.map((item) => (
            <Button
              key={item.section}
              color="inherit"
              onClick={() => scrollToSection(item.section)}
              sx={{
                fontFamily: "'Poppins', sans-serif",
                marginLeft: "10px",
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