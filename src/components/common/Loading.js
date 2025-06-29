import React from "react";

export default function Loading() {
  return (
    <div
      style={{
        background: "#2f323f",
        minHeight: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 2000,
      }}
    >
      <span
        style={{
          color: "#d74a3a",
          fontSize: "5rem",
          fontFamily: "'Press Start 2P', cursive",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Loading...
      </span>
    </div>
  );
}