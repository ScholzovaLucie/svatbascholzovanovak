import React, { useState } from "react";
import Gallery from "../components/Galery";
const UsGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    `img/1.JPG`,
    `img/2.JPG`,
    `img/3.jpg`,
    `img/4.jpg`,
    `img/5.jpg`,
    `img/6.JPG`,
  ];

  return <Gallery title="Moje fotky" images={images} />;
};

export default UsGallery;
