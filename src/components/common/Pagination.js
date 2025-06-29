import React from "react";

export default function Pagination({ goToNextPage, goToPrevPage }) {
  const buttonStyle = {
    backgroundColor: "#141414",
    color: "#fff",
    border: "2px solid transparent",
    borderRadius: "8px",
    padding: "0.5rem 2.5rem",
    fontWeight: "bold",
    fontSize: "1rem",
    minWidth: "120px",
    minHeight: "44px",
    boxShadow: "0 4px 16px rgba(0,0,0,0.18)",
    transition: "border 0.2s, box-shadow 0.2s",
    cursor: "pointer",
    outline: "none",
    opacity: 1,
  };

  const disabledStyle = {
    ...buttonStyle,
    cursor: "not-allowed",
    opacity: 0.5,
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "1rem",
        margin: "1.5rem 0",
      }}
    >
      <button
        onClick={goToPrevPage}
        disabled={!goToPrevPage}
        style={
          goToPrevPage
            ? {
                ...buttonStyle,
                fontFamily: "'Press Start 2P', cursive",
                fontSize: "18px",
              }
            : {
                ...disabledStyle,
                fontFamily: "'Press Start 2P', cursive",
                fontSize: "18px",
              }
        }
        onMouseOver={(e) => {
          if (goToPrevPage) e.currentTarget.style.border = "2px solid #d74a3a";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.border = "2px solid transparent";
        }}
      >
        Prev
      </button>
      <img
        src="/img/pokeball.png"
        alt="Pokeball"
        id="pokeball-img"
        style={{
          width: "50px",
          height: "48px",
          userSelect: "none",
          background: "none",
          border: "none",
          borderRadius: "0",
          padding: "0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "transform 0.4s cubic-bezier(.4,2,.6,1)",
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = "rotate(360deg)";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = "rotate(0deg)";
        }}
      />
      <button
        onClick={goToNextPage}
        disabled={!goToNextPage}
        style={
          goToNextPage
            ? {
                ...buttonStyle,
                fontFamily: "'Press Start 2P', cursive",
                fontSize: "18px",
              }
            : {
                ...disabledStyle,
                fontFamily: "'Press Start 2P', cursive",
                fontSize: "18px",
              }
        }
        onMouseOver={(e) => {
          if (goToNextPage) e.currentTarget.style.border = "2px solid #d74a3a";
        }}
        onMouseOut={(e) => {
          if (goToNextPage)
            e.currentTarget.style.border = "2px solid transparent";
        }}
      >
        Next
      </button>
    </div>
  );
}
