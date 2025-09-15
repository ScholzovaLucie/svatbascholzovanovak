import React, { useState } from "react";
import Gallery from "../components/Galery";
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

  return <Gallery title="Moje fotky" images={images} />;
};

export default WeddGalery;
