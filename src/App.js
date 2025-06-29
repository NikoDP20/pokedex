import React, { useState, useEffect } from "react";
import PokemonList from "./components/pokemon/PokemonList";
import axios from "axios";
import Pagination from "./components/common/Pagination";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PokemonDetail from "./components/pokemon/PokemonDetail";
import Header from "./components/common/Header";
import Loading from "./components/common/Loading";

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
    return <Loading />;
  }

  return (
    <Router>
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
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
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
              </>
            }
          />
          <Route path="/pokemon/:id" element={<PokemonDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
