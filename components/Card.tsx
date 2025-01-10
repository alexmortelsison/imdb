import { ThumbsUpIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Card({ results }: { results: MovieResults }) {
  return (
    <div className="border rounded-xl text-sm tracking-tighter shadow-lg hover:shadow-slate-400 duration-300 mt-4 sm:mt-0">
      <Link href={`/movie/${results.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original${
            results.poster_path || results.backdrop_path
          }`}
          alt="photo"
          width={500}
          height={300}
          className="hover:opacity-70 duration-300 rounded-t-xl"
        />
        <p className="px-2 text-center line-clamp-2 mt-4">{results.overview}</p>
        <h4 className="text-[16px] text-center mt-2 px-2 truncate font-bold text-amber-600">
          {results.original_title || results.name}
        </h4>
        <div className="flex justify-between px-4 my-2">
          <p>{results.release_date || results.first_air_date}</p>
          <div className="flex items-center gap-1">
            <ThumbsUpIcon size={18} className="text-amber-600" />
            <p>{results.vote_count}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
