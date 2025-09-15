import React from "react";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import StyledCard from "../components/StyledCard";

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
      {/* Místo obřadu */}
      <Grid item xs={12} sm={6} md={4}>
        <StyledCard
          key={"Místo obřadu"}
          title={"Místo obřadu"}
          details={
            <Typography
              variant="body2"
              align="center"
              sx={{
                fontFamily: "'Poppins', sans-serif",
                color: "var(--cinnabar)",
              }}
            >
              U lípy
              <br />
              <a
                href="https://www.google.com/maps?q=50.515513,16.266075"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "var(--cinnabar)",
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              >
                50.515513, 16.266075
              </a>
            </Typography>
          }
        />
      </Grid>

      {/* Místo oslavy */}
      <Grid item xs={12} sm={6} md={4}>
        <StyledCard
          key={"Místo oslavy"}
          title={"Místo oslavy"}
          details={
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
              <a
                href="https://www.google.com/maps?q=50.507707,16.229028"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "var(--cinnabar)",
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              >
                50.507707, 16.229028
              </a>
            </Typography>
          }
        />
      </Grid>
    </Grid>

    {/* Mapa s markery */}
    <Box
      sx={{
        marginTop: "40px",
      }}
    >
      <iframe
        title="Mapa"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d20299.825409570916!2d16.266075!3d50.515513!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470e67c83a0b46e5%3A0x2ab9194801a07c5e!2zQmV6ZMSba292IEhyxI1xIWzbcWhxZFrZQ!5e0!4m2!3m1!2d16.229028&markers=50.515513,16.266075|50.507707,16.229028"
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
