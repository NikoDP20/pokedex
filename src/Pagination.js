import React from "react";

export default function Pagination({ goToNextPage, goToPrevPage }) {
  return (
    <div>
      <button onClick={goToPrevPage} disabled={!goToPrevPage}>
        Previous
      </button>
      <button onClick={goToNextPage} disabled={!goToNextPage}>
        Next
      </button>
    </div>
  );
}
