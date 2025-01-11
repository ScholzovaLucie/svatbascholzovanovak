import React from "react";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";

const GuestList = () => {
  const ceremonyGuests = [
    "Lukáš Suchánek",
    "Honza Novák",
    "Honza Suchánek",
    "Jitka Tarabová",
    "Hela Nováková",
    "Monika Nováková",
    "Pavel Novák",
    "Týna Suchánková Amrichová",
    "Tereza Scholzová",
    "Tereza Weinlichová",
    "Lenka Scholzová",
    "Jiří Scholzo",
    "Jakub Scholz",
    "Anička Scholzová",
    "Vlasta Scholzová",
    "Jitka Doležalová",
    "Láďa Doležal",
    "Jitka Hornichová",
    "Ivana Petrovická",
    "Jan Fišera",
  ];

  const celebrationGuests = [
    "Miloš Hubka",
    "Zdeněk Taraba",
    "Klára Tarabová",
    "Lucie Tarabová",
    "Petra Tarabová",
    "Katka Nováková",
    "Tereza Mádrová",
    "Veronika Doskočilová",
    "Kamil Novák",
    "Josef Novák",
    "Jakub Novák",
    "Michal Krtička",
    "Ruda Blecha",
    "Rosťislav Mitiska",
    "Adam Ševc",
    "Eva Jirásková",
    "Martina Jirásková",
    "Natálie Martincová",
  ];

  return (
    <Box sx={{ padding: "50px 20px", textAlign: "center", backgroundColor: "transparent" }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontFamily: "'Playfair Display', serif",
          color: "var(--chocolate-cosmos)",
          marginBottom: "30px",
        }}
      >
        Seznam svatebních hostů
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {/* Pozváni na obřad */}
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              borderRadius: "12px",
              border: "1px solid var(--cinnabar)",
              backgroundColor: "rgba(255, 255, 255, 0.5)", // Jemná průhlednost
              backdropFilter: "blur(3px)", // Sklovitý efekt
              padding: "20px",
            }}
          >
            <CardContent>
              <Typography
                variant="h5"
                align="center"
                sx={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 700,
                  color: "var(--chocolate-cosmos)",
                  marginBottom: "20px",
                }}
              >
                Pozváni na obřad
              </Typography>
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
            </CardContent>
          </Card>
        </Grid>

        {/* Pozváni na oslavu */}
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              borderRadius: "12px",
              border: "1px solid var(--cinnabar)",
              backgroundColor: "rgba(255, 255, 255, 0.5)", // Jemná průhlednost
              backdropFilter: "blur(3px)", // Sklovitý efek
              padding: "20px",
            }}
          >
            <CardContent>
              <Typography
                variant="h5"
                align="center"
                sx={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 700,
                  color: "var(--chocolate-cosmos)",
                  marginBottom: "20px",
                }}
              >
                Pozváni na oslavu
              </Typography>
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
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default GuestList;