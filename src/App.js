import React, { useState, useEffect } from "react";
import PokemonList from "./PokemonList";
import axios from "axios";
import Pagination from "./Pagination";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );
  const [nextPage, setNextPage] = useState(null);
  const [prevPage, setPrevPage] = useState(null);

  useEffect(() => {
    setLoading(true);
    let cancel;

    axios
      .get(currentPage, {
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
      })
      .then(async (response) => {
        setNextPage(response.data.next);
        setPrevPage(response.data.previous);

        const pokemonDetails = await Promise.all(
          response.data.results.map(async (p) => {
            try {
              const res = await axios.get(p.url);
              return {
                name: res.data.name,
                id: res.data.id,
                sprite: res.data.sprites.front_default,
              };
            } catch (error) {
              console.error("Error fetching details for:", p.name, error);
              return {
                name: p.name,
                id: "???",
                sprite: "",
              };
            }
          })
        );

        //console.log("Fetched Pokémon:", pokemonDetails);

        setPokemon(pokemonDetails);
        setLoading(false);
      });

    return () => cancel?.();
  }, [currentPage]);

  function handleNextPage() {
    setCurrentPage(nextPage);
  }
  function handlePrevPage() {
    setCurrentPage(prevPage);
  }

  if (loading) {
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

  return (
    <div
      style={{
        background: "#2f323f",
        minHeight: "100vh",
        width: "100vw",
        boxSizing: "border-box",
        padding: 0,
        margin: 0,
        position: "fixed",
        top: 0,
        left: 0,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          padding: "10px",
          paddingBottom: 0,
          display: "flex",
          justifyContent: "center",
        }}
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
          }}
        >
          Pokédex
        </div>
      </div>
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <PokemonList pokemon={pokemon} />
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          padding: "20px 0",
        }}
      >
        <Pagination
          goToNextPage={nextPage ? handleNextPage : null}
          goToPrevPage={prevPage ? handlePrevPage : null}
        />
      </div>
    </div>
  );
}

export default App;
