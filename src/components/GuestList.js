import React from "react";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import StyledCard from "./StyledCard";

const GuestList = () => {
  const ceremonyGuests = [
    "Lukáš Suchánek, Týna Suchánková Amrichová",
    "Honza Novák",
    "Honza Suchánek, Markéta Suchánková",
    "Jitka Tarabová",
    "Hela Nováková",
    "Monika Nováková, Pavel Novák",
    "Tereza Scholzová",
    "Tereza Weinlichová",
    "Lenka Scholzová, Jiří Scholz",
    "Jakub Scholz",
    "Anička Scholzová",
    "Vlasta Scholzová",
    "Jitka Doležalová, Láďa Doležal",
    "Jitka Hornichová",
    "Ivana Petrovická, Jan Fišera",
    "Tereza Mádrová",
    "Eva Jirásková, Jan Amrich",
  ];

  const celebrationGuests = [
    "Miloš Hubka ml, Michaela Hubková, Miloš Hubka st",
    "Zdeněk Taraba",
    "Klára Tarabová",
    "Lucie Tarabová",
    "Petra Tarabová",
    "Katka Nováková",
    "Veronika Doskočilová",
    "Kamil Novák",
    "Josef Novák",
    "Jakub Novák",
    "Michal Krtička, Šárks Hubková",
    "Ruda Blecha, Kačena Máslová",
    "Rosťislav Mitiska",
    "Adam Ševc",
    "Martina Jirásková, Martin Šedek",
    "Natálie Martincová, Filip Wietek",
    "Martin Mazurek, Lenka Mazurková",
    "Břízovi",
    "Lukáš Bajer",
    "Katka Kopecká",
    "David Fulka",
    "Jára Hubka",
    "Jirka Macura",
    "Hela Martincová",
    "Nela a Martina Peškovi",
    "Pepa Verner",
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
        Drahé polovičky a děti výtání
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
