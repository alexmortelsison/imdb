import { API_KEY } from "@/components/API_KEY";
import Image from "next/image";
import React from "react";

export default async function MoviePage({
  params,
}: {
  params: { id: string };
}) {
  const movieId = params.id;
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`
  );
  const results = await res.json();
  return (
    <div className="max-w-6xl mx-auto mt-4 flex-col md:flex-row space-x-8 px-4">
      <Image
        src={`https://image.tmdb.org/t/p/original${
          results.poster_path || results.backdrop_path
        }`}
        alt="photo"
        width={500}
        height={300}
        className="rounded-t-lg"
      />
      <p className="text-center sm:text-left">{results.overview}</p>
    </div>
  );
}
