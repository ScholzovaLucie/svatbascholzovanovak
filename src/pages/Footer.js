import React from "react";

const Footer = () => (
  <footer style={{
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    color: "var(--chocolate-cosmos)",
    textAlign: "center",
    padding: "2px",
    backdropFilter: "blur(3px)", // Moderní rozostření
  }}>
    <p>© 2025 Lucka & Jára</p>
  </footer>
);

export default Footer;