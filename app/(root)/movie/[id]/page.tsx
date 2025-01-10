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
    <div className="flex-row sm:flex text-sm gap-4 max-w-6xl mx-auto mt-4 px-4 mb-4">
      <div className="flex gap-2">
        <Image
          src={`https://image.tmdb.org/t/p/original${
            results.poster_path || results.backdrop_path
          }`}
          alt="photo"
          width={500}
          height={300}
          className="hover:opacity-70 duration-300 rounded-xl"
        />
      </div>
      <div>
        <p className="mt-4">{results.overview}</p>
        <p>
          <div className="flex mt-4 gap-2">
            <span>Date released:</span>
            <p>{results.release_date || results.first_air_date}</p>
          </div>
          <div className=" flex mt-4 gap-1">
            <ThumbsUpIcon size={18} className="text-amber-600" />
            <p>{results.vote_count}</p>
          </div>
        </p>
      </div>
    </div>
  );
}
