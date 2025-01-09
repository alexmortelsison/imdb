import { ThumbsUpIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Card({ results }: { results: MovieResults }) {
  return (
    <div className="text-sm tracking-tighter border rounded-lg">
      <Link href={`/movie/${results.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original${
            results.poster_path || results.backdrop_path
          }`}
          width={500}
          height={300}
          alt="photo"
          className="hover:opacity-70 duration-300 rounded-t-lg"
        />
        <p className="text-center line-clamp-2 mt-4">{results.overview}</p>
        <h3 className="text-[17px] text-center mt-2 font-bold text-amber-600 px-2 truncate">
          {results.original_title || results.name}
        </h3>
        <div className="flex items-center justify-between px-8 my-2">
          {results.release_date || results.first_air_date}
          <div className="flex items-center gap-1">
            <ThumbsUpIcon size={18} className="text-amber-600" />
            <p>{results.vote_count}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
