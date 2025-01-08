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
    <div className="w-full">
      <div className="p-4 md:pt-8 flex flex-col md:flex-row max-w-6xl mx-auto md:space-x-6">
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            results.backdrop_path || results.poster_path
          }`}
          height={300}
          width={500}
          className="rounded-lg"
          style={{ maxWidth: "100%", height: "100%" }}
          alt={""}
        ></Image>
        <div className="p-2">
          <h2 className="text-lg mb-3 font-bold">
            {results.title || results.name}
          </h2>
          <p className="text-lg mb-3">{results.overview}</p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Date Released:</span>
            {results.release_date || results.first_air_date}
          </p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Rating:</span>
            {results.vote_count}
          </p>
        </div>
      </div>
    </div>
  );
}
