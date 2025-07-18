import React from "react";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import StyledCard from "./StyledCard";

const GuestList = () => {
  const ceremonyGuests = [
    "Lukáš a Kristýna Suchánkovi",
    "Jan Novák",
    "Jan a Markéta Suchánkovi",
    "Jitka Tarabová",
    "Helena Nováková",
    "Pavel a Monika Novákovi",
    "Tereza Scholzová",
    "Tereza Weinlichová",
    "Jiří a Lenka Scholzovi",
    "Jakub Scholz",
    "Anička Scholzová",
    "Vlasta Scholzová",
    "Ladislav a Jitka Doležalovi",
    "Jitka Hornychová",
    "Ivana Petrovická, Jan Fišera",
    "Tereza Mádrová",
    "Eva Jirásková, Jan Amrich",
  ];

  const celebrationGuests = [
    "Miloš ml a Michaela Hubkovi",
    "Miloš Hubka st",
    "Zdeněk Taraba",
    "Klára Tarabová",
    "Lucie Tarabová",
    "Petra Tarabová",
    "Karel Taraba",
    "Kateřina Kopecká",
    "Veronika Doskočilová",
    "Kamil Novák",
    "Josef Novák",
    "Jakub Novák",
    "Hana Nováková",
    "Kateřina Kopecká",
    "Michal Krtička, Šárka Hubková",
    "Rudolf Blecha, Kateřina Máslová",
    "Rostislav Mitiska",
    "Adam Ševc",
    "Martina Jirásková, Martin Šedek",
    "Filip a Natálie Wietkovi",
    "Martin a Lenka Mazurkovi",
    "Jiří a Tomáš Břízovi",
    "Lukáš Bajer",
    "David Fulka",
    "Jaroslav Hubka",
    "Jiří a Alena Macurova",
    "Josef a Helena Martincovi",
    "Nela a Martina Peškovi",
    "Josef Verner",
    "Vladimír Scholz",
    "Vojtěch Scholz",
  ];

  return (
    <Box
      sx={{
        padding: "50px 20px",
        textAlign: "center",
        backgroundColor: "transparent",
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontFamily: "'Playfair Display', serif",
          color: "var(--chocolate-cosmos)",
          marginBottom: "10px",
        }}
      >
        Seznam svatebních hostů
      </Typography>
      <Typography
        variant="h6"
        gutterBottom
        sx={{
          fontFamily: "'Playfair Display', serif",
          color: "var(--chocolate-cosmos)",
          marginBottom: "20px",
        }}
      >
        Drahé polovičky a děti vítány
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {/* Pozváni na obřad */}
        <Grid item xs={12} md={6}>
          <StyledCard
            key={"Pozváni na obřad"}
            title={"Pozváni na obřad"}
            details={
              <div>
                {ceremonyGuests.map((guest, index) => (
                  <Typography
                    key={index}
                    variant="body1"
                    align="center"
                    sx={{
                      fontFamily: "'Poppins', sans-serif",
                      color: "var(--chocolate-cosmos)",
                    }}
                  >
                    {guest}
                  </Typography>
                ))}
              </div>
            }
          />
        </Grid>

        {/* Pozváni na oslavu */}
        <Grid item xs={12} md={6}>
          <StyledCard
            key={"Pozváni na oslavu"}
            title={"Pozváni na oslavu"}
            details={
              <div>
                {celebrationGuests.map((guest, index) => (
                  <Typography
                    key={index}
                    variant="body1"
                    align="center"
                    sx={{
                      fontFamily: "'Poppins', sans-serif",
                      color: "var(--chocolate-cosmos)",
                    }}
                  >
                    {guest}
                  </Typography>
                ))}
              </div>
            }
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default GuestList;
