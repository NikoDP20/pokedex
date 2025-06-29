import React from "react";

const TYPE_COLORS = {
  normal: "#A8A77A",
  fire: "#EE8130",
  water: "#6390F0",
  electric: "#F7D02C",
  grass: "#7AC74C",
  ice: "#96D9D6",
  fighting: "#C22E28",
  poison: "#A33EA1",
  ground: "#E2BF65",
  flying: "#A98FF3",
  psychic: "#F95587",
  bug: "#A6B91A",
  rock: "#B6A136",
  ghost: "#735797",
  dragon: "#6F35FC",
  dark: "#705746",
  steel: "#B7B7CE",
  fairy: "#D685AD",
};

export default function PokeType({ type }) {
  const bgColor = TYPE_COLORS[type] || "#383b4a";
  return (
    <div
      style={{
        background: bgColor,
        borderRadius: "8px",
        padding: "10px 20px",
        color: "#fff",
        fontWeight: "bold",
        fontSize: "1.5rem", // Increased font size
        textTransform: "capitalize",
        border: "2px solid #141414",
        minWidth: "80px",
        width: "100%",
        textAlign: "center",
        boxShadow: "0 1px 4px rgba(0,0,0,0.12)",
        WebkitTextStroke: "0.5px #141414",
        textShadow: `
                -0.5px -0.5px 0 #141414,
                0.5px -0.5px 0 #141414,
                -0.5px 0.5px 0 #141414,
                0.5px 0.5px 0 #141414
            `,
        fontFamily: "'Press Start 2P', cursive",
      }}
    >
      {type}
    </div>
  );
}
