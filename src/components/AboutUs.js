import React from "react";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";

const AboutUs = () => (
  <Box sx={{ padding: "50px 20px" }}>
    <Typography variant="h4" gutterBottom align="center" sx={{
        fontFamily: "'Playfair Display', serif",
      }}>
      O nás
    </Typography>
    <Grid container spacing={4}>
      <Grid item xs={12} md={6}>
        <Card>
          <CardContent>
            <Typography variant="h6">Lucka</Typography>
            <Typography>
              Miluje dobré víno, knihy a společné procházky se psem.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card>
          <CardContent>
            <Typography variant="h6">Jára</Typography>
            <Typography>
              Nadšenec do vaření, sportu a víkendových výletů.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  </Box>
);

export default AboutUs;