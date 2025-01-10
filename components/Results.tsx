import React from "react";
import Card from "./Card";

export default function Results({ results }: { results: MovieResults[] }) {
  return (
    <div className="sm:grid sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto gap-2 mt-4 px-4 mb-4">
      {results.map((result) => (
        <div key={result.id}>
          <Card results={result} />
        </div>
      ))}
    </div>
  );
}
