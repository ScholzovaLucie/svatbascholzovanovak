import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const StyledCard = ({ title, details, image, customStyles }) => (
  <Card
    sx={{
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
      borderRadius: "12px",
      border: "1px solid var(--cinnabar)",
      backgroundColor: "rgba(255, 255, 255, 0.5)", // Jemná průhlednost
      backdropFilter: "blur(3px)", // Sklovitý efekt
      ...customStyles, // Přidání dodatečného stylování
    }}
  >
    {image && (
      <CardMedia
        component="img"
        image={image}
        alt={title}
        sx={{
          height: "400px",
          objectFit: "cover",
          borderTopLeftRadius: "12px",
          borderTopRightRadius: "12px",
        }}
      />
    )}
    <CardContent>
      <Typography
        variant="h5"
        align="center"
        sx={{
          fontFamily: "'Playfair Display', serif",
          fontWeight: 700,
          color: "var(--chocolate-cosmos)",
          marginBottom: "10px",
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="body1"
        align="center"
        sx={{
          fontFamily: "'Poppins', sans-serif",
          color: "var(--chocolate-cosmos)",
        }}
      >
        {details}
      </Typography>
    </CardContent>
  </Card>
);

export default StyledCard;