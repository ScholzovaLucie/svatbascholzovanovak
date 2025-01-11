import React from "react";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";

const Location = () => (
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
      Místo konání
    </Typography>
    <Grid container spacing={4} justifyContent="center">
      <Grid item xs={12} sm={6} md={4}>
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
              Místo obřadu
            </Typography>
            <Typography
              variant="body2"
              align="center"
              sx={{
                fontFamily: "'Poppins', sans-serif",
                color: "var(--cinnabar)",
              }}
            >
              U lípi
              <br />
              50.515513, 16.266075
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
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
              Místo oslavy
            </Typography>
            <Typography
              variant="body2"
              align="center"
              sx={{
                fontFamily: "'Poppins', sans-serif",
                color: "var(--cinnabar)",
              }}
            >
              Bezděkovské hřiště
              <br />
              50.507707, 16.229028
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
    <Box
      sx={{
        marginTop: "40px",
      }}
    >
      <iframe
        title="Mapa"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20299.825409570916!2d16.207053454418556!3d50.50666902646239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470e67c83a0b46e5%3A0x2ab9194801a07c5e!2zQmV6ZMSba292IG5hZCBNZXR1asOt!5e0!3m2!1scs!2scz!4v1736547701209!5m2!1scs!2scz"
        style={{
          width: "100%",
          height: "60vh",
          borderRadius: "12px",
          border: "2px solid var(--cinnabar)",
        }}
        loading="lazy"
      ></iframe>
    </Box>
  </Box>
);

export default Location;