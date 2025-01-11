import React from "react";
import { Box, Typography, Grid, Card, CardContent, CardMedia } from "@mui/material";

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
        <Card
          sx={{
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            borderRadius: "12px",
            border: "1px solid var(--cinnabar)",
            backgroundColor: "rgba(255, 255, 255, 0.5)", // Jemná průhlednost
            backdropFilter: "blur(3px)", // Sklovitý efek
          }}
        >
          <CardMedia
            component="img"
            image="../public/img/5.jpg" // Nahraďte cestou k obrázku nevěsty
            alt="Lucka"
            sx={{
              height: "400px",
              objectFit: "cover",
              borderTopLeftRadius: "12px",
              borderTopRightRadius: "12px",
            }}
          />
          <CardContent>
            <Typography
              variant="h5"
              align="center"
              sx={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                color: "var(--chocolate-cosmos)",
              }}
            >
              Lucka
            </Typography>
            <Typography
              variant="body1"
              align="center"
              sx={{
                fontFamily: "'Poppins', sans-serif",
                color: "var(--chocolate-cosmos)",
                marginTop: "10px",
              }}
            >
              Je tichá duše, která nachází krásu ve světě kolem sebe. Design, hudba, umění a knihy jsou pro ni útočištěm, kde čerpá inspiraci a klid. Jako programátorka miluje hledání elegantních řešení. Její okruh přátel je malý, ale každý z nich pro ni znamená svět. Rodina je pro ni pevnou oporou a zdrojem radosti, kterou opětuje svou láskou.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card
          sx={{
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            borderRadius: "12px",
            border: "1px solid var(--cinnabar)",
            backgroundColor: "rgba(255, 255, 255, 0.5)", // Jemná průhlednost
            backdropFilter: "blur(3px)", // Sklovitý efek
          }}
        >
          <CardMedia
            component="img"
            image="../public/img/6.jpg" // Nahraďte cestou k obrázku ženicha
            alt="Jára"
            sx={{
              height: "400px",
              objectFit: "cover",
              borderTopLeftRadius: "12px",
              borderTopRightRadius: "12px",
            }}
          />
          <CardContent>
            <Typography
              variant="h5"
              align="center"
              sx={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                color: "var(--chocolate-cosmos)",
              }}
            >
              Jára
            </Typography>
            <Typography
              variant="body1"
              align="center"
              sx={{
                fontFamily: "'Poppins', sans-serif",
                color: "var(--chocolate-cosmos)",
                marginTop: "10px",
              }}
            >
              Je člověk s velkým srdcem a vášní pro zemědělství. Pole a příroda jsou jeho druhým domovem, kde nachází klid a radost z dobře vykonané práce. Miluje zvířata, lyžování a cestování, které mu otevírají nové obzory. Své okolí okouzlí smíchem a optimismem – jeho extrovertní povaha přináší zábavu a energii všude, kam přijde.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  </Box>
);

export default AboutUs;