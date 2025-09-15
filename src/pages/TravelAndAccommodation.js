import React from "react";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import StyledCard from "../components/StyledCard";

const TravelAndAccommodation = () => {
  const info = [
    {
      title: "Doprava",
      details:
        "Parkování je zajištěno přímo u místa konání oslavy. Pokud přijíždíte vlakem, nejbližší zastávka je v Polici nad metují. Pro hosty z okolí bude zajištěn svoz.",
    },
    {
      title: "Ubytování",
      details:
        "Pro hosty je možnost přespání v tělocvičně. Je však nutné si přinést vlastní spacáky a karimatky.",
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
            <StyledCard
              key={index}
              title={item.title}
              details={item.details}
              image={item.image}
              customStyles={item.customStyles}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TravelAndAccommodation;
