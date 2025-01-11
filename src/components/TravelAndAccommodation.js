import React from "react";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";

const TravelAndAccommodation = () => {
  const info = [
    {
      title: "Doprava",
      details: "Parkování je zajištěno přímo u místa konání oslavy. Pokud přijíždíte vlakem, nejbližší zastávka je v Police nad metují. Pro hosty z okolí bude zajištěn svoz.",
    },
    {
      title: "Ubytování",
      details: "Pro hosty je možnost přespání v tělocvičně. Je však nutné si přinést vlastní spacáky a karimatky.",
    },
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
          marginBottom: "30px",
        }}
      >
        Informace k dopravě a ubytování
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {info.map((item, index) => (
          <Grid item xs={12} md={6} key={index}>
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
                    marginBottom: "10px",
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="body1"
                  align="center"
                  sx={{
                    fontFamily: "'Poppins', sans-serif",
                    color: "var(--chocolate-cosmos)",
                  }}
                >
                  {item.details}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TravelAndAccommodation;