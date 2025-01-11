import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";

const Dresscode = () => {
  const palette = [
    { name: "Chocolate Cosmos", color: "var(--chocolate-cosmos)" },
    { name: "Cinnabar", color: "var(--cinnabar)" },
    { name: "Selective Yellow", color: "var(--selective-yellow)" },
    { name: "Buff", color: "var(--buff)" },
    { name: "Avocado", color: "var(--avocado)" },
  ];

  return (
    <Box sx={{ padding: "50px 20px", textAlign: "center" }}>
      <Typography
        variant="h4"
        align="center"
        sx={{
          fontFamily: "'Playfair Display', serif",
          marginBottom: "30px",
          color: "var(--chocolate-cosmos)",
        }}
      >
        Dresscode
      </Typography>
      <Typography
        variant="body1"
        align="center"
        sx={{
          fontFamily: "'Poppins', sans-serif",
          marginBottom: "20px",
          color: "var(--chocolate-cosmos)",
        }}
      >
        Inspirace pro vaše outfity. Barvy naší svatby:
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {palette.map((shade, index) => (
          <Grid item xs={6} sm={4} md={2} key={index}>
            <Paper
              elevation={3}
              sx={{
                width: "100px",
                height: "100px",
                margin: "auto",
                backgroundColor: shade.color,
                borderRadius: "8px",
                border: "2px solid rgba(0, 0, 0, 0.1)",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              }}
            />
            <Typography
              variant="body2"
              align="center"
              sx={{
                fontFamily: "'Poppins', sans-serif",
                marginTop: "10px",
                color: "var(--chocolate-cosmos)",
              }}
            >
              {shade.name}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Dresscode;