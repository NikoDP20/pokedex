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
      .then((response) => {
        setLoading(false);
        setNextPage(response.data.next);
        setPrevPage(response.data.previous);
        setPokemon(response.data.results.map((p) => p.name));
      });

    return () => cancel();
  }, [currentPage]);

  function handleNextPage() {
    setCurrentPage(nextPage);
  }
  function handlePrevPage() {
    setCurrentPage(prevPage);
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <PokemonList pokemon={pokemon} />
      <Pagination
        goToNextPage={nextPage ? handleNextPage : null}
        goToPrevPage={prevPage ? handlePrevPage : null}
      />
    </>
  );
}

export default App;
