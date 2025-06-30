import React from "react";

const WhatsAppButton = () => {
  const buttonStyle = {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    backgroundColor: "#16BE45",
    color: "white",
    fontSize: "24px",
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 9999,
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
    transition: "transform 0.3s ease",
    cursor: "pointer",
  };

  const hoverStyle = {
    backgroundColor: "#128C7E",
    transform: "scale(1.1)",
  };

  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <a
      href="https://api.whatsapp.com/send/?phone=918861324254&text=Hello&type=phone_number&app_absent=0"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        ...buttonStyle,
        ...(isHovered ? hoverStyle : {}),
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <i className="fab fa-whatsapp" />
    </a>
  );
};

export default WhatsAppButton;
