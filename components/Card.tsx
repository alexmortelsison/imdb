import { ThumbsUpIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Card({ results }: { results: MovieResults }) {
  return (
    <div className="rounded-lg border">
      <Link href={`/movie/${results.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original${
            results.poster_path || results.backdrop_path
          }`}
          alt="photo"
          width={500}
          height={300}
          className="rounded-t-lg"
        />
        <p className="line-clamp-2 text-center text-sm mt-4 px-2">
          {results.overview}
        </p>
        <h3 className="text-center truncate mt-2 text-lg px-2 text-amber-600 font-bold">
          {results.original_title || results.name}
        </h3>
        <div className="flex items-center justify-between px-6 my-2">
          <p>{results.release_date || results.first_air_date}</p>
          <div className="flex items-center gap-1">
            <ThumbsUpIcon size={16} className="text-amber-600" />
            <p>{results.vote_count}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
