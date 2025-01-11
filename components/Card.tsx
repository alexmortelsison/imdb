import { ThumbsUpIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Card({ results }: { results: MovieResults }) {
  return (
    <div className="border rounded-xl shadow-md hover:shadow-slate-400 transition-shadow duration-300 tracking-tighter">
      <Link href={`/movie/${results.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original${
            results.poster_path || results.backdrop_path
          }`}
          alt="photo"
          width={500}
          height={300}
          className="rounded-t-xl hover:opacity-70 transition-opacity duration-150"
        />
        <p className="text-sm text-center px-2 mt-6 line-clamp-2">
          {results.overview}
        </p>
        <h3 className="text-amber-600 font-bold text-center mt-2 truncate px-2">
          {results.original_title || results.name}
        </h3>
        <div className="flex px-4 justify-between text-sm mt-2 my-2">
          {results.release_date || results.first_air_date}
          <div className="flex items-center gap-2">
            <ThumbsUpIcon size={16} className="text-amber-600" />
            <p>{results.vote_count}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
