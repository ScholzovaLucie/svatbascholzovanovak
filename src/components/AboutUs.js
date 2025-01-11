import React from "react";
import { Box, Typography, Grid, Card, CardContent, CardMedia } from "@mui/material";
import StyledCard from "./StyledCard";

const AboutUs = () => (
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
      O nás
    </Typography>
    <Grid container spacing={4} justifyContent="center">
      <Grid item xs={12} md={6}>
        <StyledCard
          key={"Lucka"}
          title={"Lucka"}
          details={"Je tichá duše, která nachází krásu ve světě kolem sebe. Design, hudba, umění a knihy jsou pro ni útočištěm, kde čerpá inspiraci a klid. Jako programátorka miluje hledání elegantních řešení. Její okruh přátel je malý, ale každý z nich pro ni znamená svět. Rodina je pro ni pevnou oporou a zdrojem radosti, kterou opětuje svou láskou."}
          image={`img/5.jpg`}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <StyledCard
          key={"Jára"}
          title={"Jára"}
          details={"Je člověk s velkým srdcem a vášní pro zemědělství. Pole a příroda jsou jeho druhým domovem, kde nachází klid a radost z dobře vykonané práce. Miluje zvířata a cestování, které mu otevírají nové obzory. Své okolí okouzlí smíchem a optimismem – jeho extrovertní povaha přináší zábavu a energii všude, kam přijde."}
          image={`img/6.JPG`}
        />
      </Grid>
    </Grid>
  </Box>
);

export default AboutUs;