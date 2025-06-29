import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import RevealAnimation from "../common/RevealAnimation";
import PokeType from "./PokeType";
import Loading from "../common/Loading";

export default function PokemonDetail() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [species, setSpecies] = useState(null);
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => setPokemon(res.data));
    axios
      .get(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
      .then((res) => setSpecies(res.data));
  }, [id]);

  if (!pokemon || !species)
    return <Loading />;

  // Helper for gender rate
  const getGenderChances = (rate) => {
    if (rate === -1) return "Genderless";
    const female = (rate / 8) * 100;
    const male = 100 - female;
    return `♂ ${male}% / ♀ ${female}%`;
  };

  return (
    <div
      style={{
        color: "#fff",
        padding: "40px 0",
        textAlign: "center",
        position: "relative",
        minHeight: "100vh",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {showAnimation && (
        <RevealAnimation onFinish={() => setShowAnimation(false)} />
      )}

      {/* Main container */}
      <div
        style={{
          width: "1050px",
          maxWidth: "90vw",
          margin: "0 auto",
          background: "#181a23",
          borderRadius: "20px",
          boxShadow: "0 4px 16px rgba(0,0,0,0.3)",
          padding: "32px 32px 40px 32px",
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
        }}
      >
        {/* Top row: ID left, name right */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "24px",
            fontFamily: "'Press Start 2P', cursive",
            fontSize: "2rem",
          }}
        >
          <span style={{ color: "#d74a3a" }}>#{pokemon.id}</span>
          <span style={{ color: "#fff", textTransform: "capitalize" }}>
            {pokemon.name}
          </span>
        </div>

        {/* Stats and image row */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            width: "100%",
            gap: "30px",
          }}
        >
          {/* Stats - 40% */}
          <div
            style={{
              width: "40%",
              minWidth: "140px",
              background: "#232533",
              borderRadius: "16px",
              padding: "18px 10px",
              color: "#fff",
              fontSize: "1.2rem",
              textAlign: "left",
              boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
              display: "flex",
              flexDirection: "column",
              alignItems: "stretch",
              height: "416px",
              boxSizing: "border-box",
            }}
          >
            <div
              style={{
                fontWeight: "bold",
                color: "#d74a3a",
                marginBottom: "10px",
                fontSize: "1.2rem",
                fontFamily: "'Press Start 2P', cursive",
              }}
            >
              Base Stats
            </div>
            {pokemon.stats &&
              pokemon.stats.map((stat, idx, arr) => (
                <React.Fragment key={stat.stat.name}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      background: "#292b3a",
                      borderRadius: "8px",
                      padding: "8px 12px",
                      marginBottom: "8px",
                      width: "90%",
                      fontSize: "1.2rem",
                    }}
                  >
                    <span style={{ textTransform: "capitalize" }}>
                      {stat.stat.name}
                    </span>
                    <span style={{ fontWeight: "bold" }}>{stat.base_stat}</span>
                  </div>
                  {/* After the last stat (speed), insert the type section */}
                  {stat.stat.name === "speed" && (
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "12px",
                        marginTop: "12px",
                        marginBottom: "8px",
                        height: "64px",
                        alignItems: "center",
                        width: "100%",
                      }}
                    >
                      {pokemon.types.map((typeObj) => (
                        <PokeType
                          key={typeObj.type.name}
                          type={typeObj.type.name}
                        />
                      ))}
                    </div>
                  )}
                </React.Fragment>
              ))}
          </div>

          {/* Image and info - 60% */}
          <div
            style={{
              width: "60%",
              height: "410px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              border: "3px solid #d74a3a",
              borderRadius: "16px",
            }}
          >
            <img
              src={pokemon.sprites.front_default}
              alt={pokemon.name}
              style={{
                width: "300px",
                height: "300px",
                marginBottom: "18px",
              }}
            />
          </div>
        </div>

        {/* Info row: Weight, Species, Height */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            marginTop: "32px",
            gap: "24px",
          }}
        >
          {/* Weight */}
          <div
            style={{
              flex: 1,
              border: "3px solid #d74a3a",
              borderRadius: "12px",
              padding: "18px 0",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              background: "#232533",
            }}
          >
            <span
              style={{
                color: "#d74a3a",
                fontWeight: "bold",
                fontSize: "1rem",
                marginBottom: "8px",
                letterSpacing: "1px",
                fontFamily: "'Press Start 2P', cursive",
              }}
            >
              Weight
            </span>
            <span style={{ color: "#fff", fontSize: "1.3rem" }}>
              {pokemon.weight / 10} kg
            </span>
          </div>
          {/* Species */}
          <div
            style={{
              flex: 1,
              border: "3px solid #d74a3a",
              borderRadius: "12px",
              padding: "18px 0",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              background: "#232533",
            }}
          >
            <span
              style={{
                color: "#d74a3a",
                fontWeight: "bold",
                fontSize: "1rem",
                marginBottom: "8px",
                letterSpacing: "1px",
                fontFamily: "'Press Start 2P', cursive",
              }}
            >
              Species
            </span>
            <span
              style={{
                color: "#fff",
                fontSize: "1.3rem",
                textTransform: "capitalize",
              }}
            >
              {pokemon.species?.name}
            </span>
          </div>
          {/* Height */}
          <div
            style={{
              flex: 1,
              border: "3px solid #d74a3a",
              borderRadius: "12px",
              padding: "18px 0",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              background: "#232533",
            }}
          >
            <span
              style={{
                color: "#d74a3a",
                fontWeight: "bold",
                fontSize: "1rem",
                marginBottom: "8px",
                letterSpacing: "1px",
                fontFamily: "'Press Start 2P', cursive",
              }}
            >
              Height
            </span>
            <span style={{ color: "#fff", fontSize: "1.3rem" }}>
              {pokemon.height / 10} m
            </span>
          </div>
        </div>

        {/* Training & Breeding row */}
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            marginTop: "32px",
            gap: "32px",
          }}
        >
          {/* Training */}
          <div
            style={{
              width: "50%",
              background: "#232533",
              borderRadius: "16px",
              padding: "24px",
              color: "#fff",
              textAlign: "left",
              boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
              display: "flex",
              flexDirection: "column",
              gap: "14px",
            }}
          >
            <div
              style={{
                color: "#d74a3a",
                fontWeight: "bold",
                fontSize: "1.1rem",
                marginBottom: "12px",
                fontFamily: "'Press Start 2P', cursive",
              }}
            >
              Training
            </div>
            {/* Each stat row */}
            <div
              style={{
                background: "#292b3a",
                borderRadius: "8px",
                padding: "10px 14px",
                marginBottom: "4px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span>EV Yield:</span>
              <span>
                {pokemon.stats
                  .filter((s) => s.effort > 0)
                  .map((s) => `${s.effort} ${s.stat.name}`)
                  .join(", ") || "None"}
              </span>
            </div>
            <div
              style={{
                background: "#292b3a",
                borderRadius: "8px",
                padding: "10px 14px",
                marginBottom: "4px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span>Catch Rate:</span>
              <span>{species.capture_rate}</span>
            </div>
            <div
              style={{
                background: "#292b3a",
                borderRadius: "8px",
                padding: "10px 14px",
                marginBottom: "4px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span>Base Friendship:</span>
              <span>{species.base_happiness}</span>
            </div>
            <div
              style={{
                background: "#292b3a",
                borderRadius: "8px",
                padding: "10px 14px",
                marginBottom: "4px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span>Base Exp:</span>
              <span>{pokemon.base_experience}</span>
            </div>
            <div
              style={{
                background: "#292b3a",
                borderRadius: "8px",
                padding: "10px 14px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span>Growth Rate:</span>
              <span>{species.growth_rate.name.replace("-", " ")}</span>
            </div>
          </div>
          {/* Breeding */}
          <div
            style={{
              width: "50%",
              background: "#232533",
              borderRadius: "16px",
              padding: "24px",
              color: "#fff",
              textAlign: "left",
              boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
              display: "flex",
              flexDirection: "column",
              gap: "14px",
            }}
          >
            <div
              style={{
                color: "#d74a3a",
                fontWeight: "bold",
                fontSize: "1.1rem",
                marginBottom: "12px",
                fontFamily: "'Press Start 2P', cursive",
              }}
            >
              Breeding
            </div>
            <div
              style={{
                background: "#292b3a",
                borderRadius: "8px",
                padding: "10px 14px",
                marginBottom: "4px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span>Egg Groups:</span>
              <span>{species.egg_groups.map((g) => g.name).join(", ")}</span>
            </div>
            <div
              style={{
                background: "#292b3a",
                borderRadius: "8px",
                padding: "10px 14px",
                marginBottom: "4px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span>Gender:</span>
              <span>{getGenderChances(species.gender_rate)}</span>
            </div>
            <div
              style={{
                background: "#292b3a",
                borderRadius: "8px",
                padding: "10px 14px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span>Egg Cycle:</span>
              <span>{species.hatch_counter}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
