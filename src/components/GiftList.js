import React from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";

const GiftList = () => (
  <Box
    sx={{
      padding: "50px 20px",
      textAlign: "center",
      backgroundColor: "var(--buff)", // Světlé pozadí
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
    <Card
      sx={{
        maxWidth: "800px",
        margin: "auto",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        borderRadius: "12px",
        border: "1px solid var(--cinnabar)",
        backgroundColor: "rgba(255, 255, 255, 0.8)", // Jemná průhlednost
        backdropFilter: "blur(5px)", // Sklovitý efekt
        padding: "20px",
      }}
    >
      <CardContent>
        <Typography
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
        </Typography>
      </CardContent>
    </Card>
  </Box>
);

export default GiftList;