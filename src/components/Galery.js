import React, { useEffect, useRef, useState } from "react";
import { Box, Typography, Modal, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const Gallery = ({ title = "Galerie", images = [] }) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const isOpen = selectedIndex >= 0;
  const touchStartX = useRef(null);

  const handleImageClick = (index) => {
    setSelectedIndex(index);
  };

  const handleClose = () => {
    setSelectedIndex(-1);
  };

  const handleNext = () => {
    if (!images.length) return;
    setSelectedIndex((i) => (i + 1) % images.length);
  };

  const handlePrev = () => {
    if (!images.length) return;
    setSelectedIndex((i) => (i - 1 + images.length) % images.length);
  };

  // Klávesové zkratky: ←/→ pro přechod, Esc pro zavření
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e) => {
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, images.length]);

  // Swipe na mobilu
  const onTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };
  const onTouchEnd = (e) => {
    if (touchStartX.current == null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    const threshold = 50; // minimální vzdálenost pro swipe
    if (delta > threshold) {
      handlePrev();
    } else if (delta < -threshold) {
      handleNext();
    }
    touchStartX.current = null;
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
        {title}
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
            onClick={() => handleImageClick(index)}
          />
        ))}
      </Box>

      {/* Modal se šipkami, klávesami a swipe */}
      <Modal
        open={isOpen}
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
            maxWidth: "90vw",
            maxHeight: "90vh",
            outline: "none",
          }}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {/* Zavírací křížek */}
          <IconButton
            aria-label="Close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: 10,
              right: 10,
              backgroundColor: "white",
              color: "black",
              zIndex: 2,
              "&:hover": { backgroundColor: "rgba(255,255,255,0.8)" },
            }}
          >
            <CloseIcon />
          </IconButton>

          {/* Levá/pravá šipka */}
          {images.length > 1 && (
            <>
              <IconButton
                aria-label="Previous"
                onClick={handlePrev}
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: -60,
                  transform: "translateY(-50%)",
                  backgroundColor: "rgba(255,255,255,0.9)",
                  zIndex: 2,
                  "&:hover": { backgroundColor: "rgba(255,255,255,0.8)" },
                  display: { xs: "none", sm: "flex" },
                }}
              >
                <ChevronLeftIcon />
              </IconButton>

              <IconButton
                aria-label="Next"
                onClick={handleNext}
                sx={{
                  position: "absolute",
                  top: "50%",
                  right: -60,
                  transform: "translateY(-50%)",
                  backgroundColor: "rgba(255,255,255,0.9)",
                  zIndex: 2,
                  "&:hover": { backgroundColor: "rgba(255,255,255,0.8)" },
                  display: { xs: "none", sm: "flex" },
                }}
              >
                <ChevronRightIcon />
              </IconButton>
            </>
          )}

          {/* Obrázek */}
          {isOpen && (
            <img
              src={images[selectedIndex]}
              alt={`Selected ${selectedIndex + 1}`}
              style={{
                maxWidth: "90vw",
                maxHeight: "90vh",
                objectFit: "contain",
                borderRadius: "8px",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
              }}
            />
          )}

          {/* Indikátor pořadí dole uprostřed */}
          {images.length > 1 && isOpen && (
            <Box
              sx={{
                position: "absolute",
                bottom: 10,
                left: "50%",
                transform: "translateX(-50%)",
                backgroundColor: "rgba(0,0,0,0.5)",
                color: "white",
                px: 1.5,
                py: 0.5,
                borderRadius: "12px",
                fontSize: 12,
              }}
            >
              {selectedIndex + 1} / {images.length}
            </Box>
          )}
        </Box>
      </Modal>
    </Box>
  );
};

export default Gallery;
