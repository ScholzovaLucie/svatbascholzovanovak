import React from "react";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";

const ImportantPeople = () => {
  const brideSide = [
    { name: "Jiří Scholz", role: "Otec nevěsty" },
    { name: "Lenka Scholzová", role: "Matka nevěsty" },
    { name: "Kristýna Suchánková Amrichová", role: "Svědkyně nevěsty" },
  ];

  const groomSide = [
    { name: "Monika Nováková", role: "Matka ženicha" },
    { name: "Pavel Novák", role: "Otec ženicha" },
    { name: "Lukáš Suchánek", role: "Svědek ženicha" },
  ];

  return (
    <Box
      sx={{
        padding: "50px 20px",
        textAlign: "center",
        backgroundColor: "transparent", // Světlé pozadí
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        align="center"
        sx={{
          fontFamily: "'Playfair Display', serif",
          color: "var(--chocolate-cosmos)",
          marginBottom: "30px",
        }}
      >
        Důležité osoby
      </Typography>

      {/* Sekce nevěsty */}
      <Typography
        variant="h5"
        gutterBottom
        align="center"
        sx={{
          fontFamily: "'Playfair Display', serif",
          color: "var(--cinnabar)",
          marginBottom: "20px",
        }}
      >
        Nevěsta
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {brideSide.map((person, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                borderRadius: "12px",
                border: "1px solid var(--cinnabar)",
                backgroundColor: "rgba(255, 255, 255, 0.5)", // Jemná průhlednost
                backdropFilter: "blur(3px)", // Sklovitý efek
              }}
            >
              <CardContent>
                <Typography
                  variant="h6"
                  align="center"
                  sx={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 700,
                    color: "var(--chocolate-cosmos)",
                  }}
                >
                  {person.name}
                </Typography>
                <Typography
                  variant="body2"
                  align="center"
                  sx={{
                    fontFamily: "'Poppins', sans-serif",
                    color: "var(--cinnabar)",
                  }}
                >
                  {person.role}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Sekce ženicha */}
      <Typography
        variant="h5"
        gutterBottom
        align="center"
        sx={{
          fontFamily: "'Playfair Display', serif",
          color: "var(--cinnabar)",
          marginTop: "40px",
          marginBottom: "20px",
        }}
      >
        Ženich
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {groomSide.map((person, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                borderRadius: "12px",
                border: "1px solid var(--cinnabar)",
                backgroundColor: "rgba(255, 255, 255, 0.5)", // Jemná průhlednost
                backdropFilter: "blur(3px)", // Sklovitý efek
              }}
            >
              <CardContent>
                <Typography
                  variant="h6"
                  align="center"
                  sx={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 700,
                    color: "var(--chocolate-cosmos)",
                  }}
                >
                  {person.name}
                </Typography>
                <Typography
                  variant="body2"
                  align="center"
                  sx={{
                    fontFamily: "'Poppins', sans-serif",
                    color: "var(--cinnabar)",
                  }}
                >
                  {person.role}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ImportantPeople;