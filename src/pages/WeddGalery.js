import React, { useState } from "react";
import { Box, Typography, Modal, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const WeddGalery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    "wedd_img/U1.jpg",
    "wedd_img/U2.jpg",
    "wedd_img/U3.jpg",
    "wedd_img/U4.jpg",
    "wedd_img/U5.jpg",
    "wedd_img/U6.jpg",
    "wedd_img/U7.jpg",
    "wedd_img/U8.jpg",
    "wedd_img/U9.jpg",
    "wedd_img/U10.jpg",
    "wedd_img/U11.jpg",
    "wedd_img/U12.jpg",
    "wedd_img/U13.jpg",
    "wedd_img/U14.jpg",
    "wedd_img/U15.jpg",
    "wedd_img/U16.jpg",
    "wedd_img/U17.jpg",
    "wedd_img/U18.jpg",
    "wedd_img/U19.jpg",
    "wedd_img/U20.jpg",
    "wedd_img/U21.jpg",
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

export default WeddGalery;
