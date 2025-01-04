import React from "react";

export default function Results({
  results,
}: {
  results: { id: string | number; original_title: string }[];
}) {
  return (
    <div>
      {results.map((result) => (
        <div key={result.id}>
          <h1>{result.original_title}</h1>
        </div>
      ))}
    </div>
  );
}
