import React from "react";

export default function PokemonList({ pokemon }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(5, 190px)",
        gap: "30px",
        justifyContent: "center",
      }}
    >
      {pokemon.map((p) => (
        <div
          key={p.id}
          style={{
            width: "190px",
            height: "210px",
            background: "#141414",
            color: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            borderRadius: "20px",
            fontSize: "18px",
            boxShadow: "0 4px 16px rgba(0,0,0,0.3)",
            border: "2px solid transparent",
            cursor: "pointer",
            transition: "border-color 0.2s",
            position: "relative",
            padding: "16px 0 12px 0",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#d74a3a")}
          onMouseLeave={(e) =>
            (e.currentTarget.style.borderColor = "transparent")
          }
        >
          {/* ID in top left with border connecting to card edge */}
          <span
            style={{
              position: "absolute",
              top: "-1px",
              left: "-1px",
              fontSize: "16px",
              color: "#d74a3a",
              fontWeight: "bold",
              zIndex: 2,
              fontFamily: "'Press Start 2P', cursive",
              borderRight: "2px solid #d74a3a",
              borderBottom: "2px solid #d74a3a",
              borderBottomRightRadius: "16px",
              padding: "9px 16px 8px 14px",
              boxSizing: "border-box",
              minWidth: "54px",
              textAlign: "center",
            }}
          >
            #{p.id}
          </span>

          <img
            src={p.sprite}
            alt={p.name}
            style={{
              width: "160px",
              height: "160px",
              objectFit: "contain",
              margin: "10px 0 0 0",
            }}
          />
          {/* Name at bottom center */}
          <div
            style={{
              width: "100%",
              textAlign: "center",
              fontSize: "16px",
              fontWeight: "bold",
              marginTop: "auto",
              fontFamily: "'Press Start 2P', cursive",
            }}
          >
            {p.name}
          </div>
        </div>
      ))}
    </div>
  );
}
