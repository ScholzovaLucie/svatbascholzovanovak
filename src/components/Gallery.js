import React from "react";
import { Typography } from "@mui/material";

const Gallery = () => (
  <section style={{ padding: "20px" }}>
    <Typography variant="h4" sx={{
        fontFamily: "'Playfair Display', serif",
      }} align="center">Galerie</Typography>
    <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
      <img src="https://via.placeholder.com/150" alt="1" />
      <img src="https://via.placeholder.com/150" alt="2" />
      <img src="https://via.placeholder.com/150" alt="3" />
    </div>
  </section>
);

export default Gallery;