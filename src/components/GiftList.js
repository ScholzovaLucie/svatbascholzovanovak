import React from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";
import StyledCard from "./StyledCard";

const GiftList = () => (
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
      sx={{
        fontFamily: "'Playfair Display', serif",
        color: "var(--chocolate-cosmos)",
        marginBottom: "30px",
      }}
    >
      Tipy na dary
    </Typography>
    <StyledCard
      key={"Tipy na dary"}
      title={""}
      customStyles={{ maxWidth: "800px", margin: "auto" }}
      details={<Typography
        variant="body1"
        sx={{
          fontFamily: "'Poppins', sans-serif",
          color: "var(--chocolate-cosmos)",
          lineHeight: "1.6",
        }}
      >
        Milí hosté,
        Vaše přítomnost na naší svatbě je pro nás tím největším darem. Pokud
        byste nás však chtěli obdarovat, budeme vám vděční za finanční příspěvek,
        který nám pomůže na naší společné cestě životem.
        <br />
        <br />
        Děkujeme, že jste součástí našeho velkého dne! ❤️
      </Typography>}
    />
  </Box>
);

export default GiftList;