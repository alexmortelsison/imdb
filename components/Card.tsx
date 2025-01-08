import { ThumbsUpIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Card({ results }: { results: MovieResults }) {
  return (
    <div className="border border-amber-600 dark:border-slate-200 duration-400 rounded-t-xl shadow-md hover:shadow-slate-400">
      <Link href={`/movie/${results.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original${
            results.poster_path || results.backdrop_path
          }`}
          alt="photo"
          width={500}
          height={300}
          className="hover:opacity-70 rounded-t-xl"
        />
      </Link>
      <p className="line-clamp-2 text-sm text-center px-2 mt-2">
        {results.overview}
      </p>
      <h1 className="truncate text-center mt-3 text-amber-600 font-bold px-2">
        {results.original_title || results.name}
      </h1>
      <div className="flex justify-between px-2 text-sm mt-2">
        <p>{results.release_date || results.first_air_date}</p>
        <div className="flex gap-2 mb-2">
          <ThumbsUpIcon size={18} className="text-amber-600" />
          <p>{results.vote_count}</p>
        </div>
      </div>
    </div>
  );
}
