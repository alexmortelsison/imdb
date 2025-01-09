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
    <div>
      <Image
        src={`https://image.tmdb.org/t/p/original${
          results.poster_path || results.backdrop_path
        }`}
        width={500}
        height={300}
        alt="photo"
        className="hover:opacity-70 duration-300 rounded-t-lg"
      />
    </div>
  );
}
