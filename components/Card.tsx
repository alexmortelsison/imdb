import { ThumbsUpIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Card({ results }: { results: MovieResults }) {
  return (
    <div className="border rounded-lg text-center hover:shadow-slate-400 shadow-md duration-500">
      <Link href={`/movie/${results.id}`} className="text-sm">
        <Image
          src={`https://image.tmdb.org/t/p/original${
            results.poster_path || results.backdrop_path || "/1.png"
          }`}
          alt="photo"
          width={500}
          height={300}
          className="rounded-t-lg hover:opacity-70 duration-300"
        />
        <p className="line-clamp-2 mt-2">{results.overview}</p>
        <h1 className="mt-2 text-lg text-amber-600 font-semibold truncate px-2">
          {results.original_title || results.name}
        </h1>
        <div className="flex justify-between px-4 my-2">
          <p>
            {results.release_date || results.first_air_date || `No data found`}
          </p>
          <div className="flex gap-1">
            <ThumbsUpIcon size={16} className="text-amber-600" />
            {results.vote_count}
          </div>
        </div>
      </Link>
    </div>
  );
}
