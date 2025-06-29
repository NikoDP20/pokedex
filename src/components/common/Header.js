import React from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        padding: "10px",
        paddingBottom: 0,
        display: "flex",
        justifyContent: "center",
        cursor: "pointer",
      }}
      onClick={() => navigate("/")}
      title="Go to Pokédex Home"
    >
      <div
        style={{
          background:
            "linear-gradient(65deg, #d74a3a 0%, #7a1d1d 50%, #7a1d1d 100%)",
          height: "60px",
          width: "1100px",
          maxWidth: "90vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          fontSize: "2em",
          fontWeight: "bold",
          borderRadius: "20px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          fontFamily: "'Press Start 2P', cursive",
          userSelect: "none",
        }}
      >
        Pokédex
      </div>
    </div>
  );
}