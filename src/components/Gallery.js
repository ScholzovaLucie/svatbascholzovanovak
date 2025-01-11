import React, { useState } from "react";
import { Box, Typography, Modal, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    `img/1.jpg`,
    `img/2.jpg`,
    `img/3.jpg`,
    `img/4.jpg`,
    `img/5.jpg`,
    `img/6.jpg`,
  ];

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <Box sx={{ padding: "50px 20px", textAlign: "center" }}>
      <Typography
        variant="h4"
        sx={{
          fontFamily: "'Playfair Display', serif",
          marginBottom: "30px",
          color: "var(--chocolate-cosmos)",
        }}
      >
        Galerie
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Gallery ${index + 1}`}
            style={{
              width: "200px",
              height: "150px",
              objectFit: "cover",
              borderRadius: "8px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              cursor: "pointer",
            }}
            onClick={() => handleImageClick(image)}
          />
        ))}
      </Box>

      {/* Modal pro zvětšení obrázku */}
      <Modal
        open={!!selectedImage}
        onClose={handleClose}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backdropFilter: "blur(10px)",
        }}
      >
        <Box
          sx={{
            position: "relative",
            maxWidth: "90vw", // Maximální šířka obrázku vzhledem k oknu
            maxHeight: "90vh", // Maximální výška obrázku vzhledem k oknu
          }}
        >
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: "10px",
              right: "10px",
              backgroundColor: "white",
              color: "black",
              zIndex: 10,
            }}
          >
            <CloseIcon />
          </IconButton>
          <img
            src={selectedImage}
            alt="Selected"
            style={{
              maxWidth: "90vw",
              maxHeight: "90vh", 
              objectFit: "contain",
              borderRadius: "8px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
            }}
          />
        </Box>
      </Modal>
    </Box>
  );
};

export default Gallery;