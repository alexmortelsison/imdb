import { API_KEY } from "@/components/API_KEY";
import { ThumbsUpIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

export default async function MoviePage({
  params,
}: {
  params: { id: string };
}) {
  const movieID = params.id;
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieID}?api_key=${API_KEY}`
  );
  const results = await res.json();
  return (
    <div className="max-w-6xl mx-auto flex-row sm:flex px-4 sm:px-0 mt-4 tracking-tighter mb-4">
      <Image
        src={`https://image.tmdb.org/t/p/original${
          results.poster_path || results.backdrop_path
        }`}
        alt="photo"
        width={500}
        height={300}
        className="rounded-xl hover:opacity-70 transition-opacity duration-150 sm:max-w-[30%]"
      />
      <div className="pt-4 sm:pt-0 ml-4 text-center sm:text-left">
        <p className="border-b pb-4 border-slate-400 px-2 sm:px-0">
          {results.overview}
        </p>
        <div className="pt-4 flex gap-4">
          <span>Date released:</span>
          <p>{results.release_date || results.first_air_date}</p>
        </div>
        <div className="pt-2 flex gap-2 items-center">
          <span>
            <ThumbsUpIcon size={16} />
          </span>
          <p>{results.vote_count}</p>
        </div>
      </div>
    </div>
  );
}
