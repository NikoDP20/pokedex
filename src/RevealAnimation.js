import React, { useEffect, useState } from "react";

export default function RevealAnimation({ onFinish }) {
  const [fadePokeball, setFadePokeball] = useState(false);
  const [reveal, setReveal] = useState(false);

  useEffect(() => {
    const fadeTimeout = setTimeout(() => setFadePokeball(true), 700); // Pokeball fades after 0.7s
    const revealTimeout = setTimeout(() => setReveal(true), 1200); // Sliders move after 1.2s
    const finishTimeout = setTimeout(() => {
      if (onFinish) onFinish();
    }, 2000); // Animation done after 2s

    return () => {
      clearTimeout(fadeTimeout);
      clearTimeout(revealTimeout);
      clearTimeout(finishTimeout);
    };
  }, [onFinish]);

  return (
    <div
      style={{
        pointerEvents: reveal ? "none" : "auto",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 1000,
        display: "flex",
        flexDirection: "column",
        transition: "opacity 0.4s 1.2s",
        opacity: reveal ? 0 : 1,
      }}
    >
      {/* Pokeball image in center, fades out before sliders move */}
      <img
        src="/img/pokeball.png"
        alt="Pokeball"
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          width: "260px",
          height: "260px",
          transform: "translate(-50%, -50%)",
          transition: "opacity 0.5s cubic-bezier(.77,0,.18,1)",
          opacity: fadePokeball ? 0 : 1,
          zIndex: 1100,
          pointerEvents: "none",
          filter: "drop-shadow(0 8px 32px #0008)",
        }}
      />
      {/* Top slider */}
      <div
        style={{
          background: "#141414",
          height: "50vh",
          width: "100vw",
          borderBottom: "10px solid #d74a3a",
          borderBottomLeftRadius: "40px",
          borderBottomRightRadius: "40px",
          boxSizing: "border-box",
          transform: reveal ? "translateY(-100%)" : "translateY(0)",
          transition: "transform 0.7s cubic-bezier(.77,0,.18,1)",
        }}
      />
      {/* Bottom slider */}
      <div
        style={{
          background: "#141414",
          height: "50vh",
          width: "100vw",
          borderTop: "10px solid #d74a3a",
          borderTopLeftRadius: "40px",
          borderTopRightRadius: "40px",
          boxSizing: "border-box",
          transform: reveal ? "translateY(100%)" : "translateY(0)",
          transition: "transform 0.7s cubic-bezier(.77,0,.18,1)",
        }}
      />
    </div>
  );
}
