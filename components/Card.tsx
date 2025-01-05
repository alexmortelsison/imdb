import { ThumbsUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Card({ results }: { results: MovieResults }) {
  return (
    <div className="border rounded-lg hover:shadow-md hover:shadow-slate-400 hover:text-lg pb-2">
      <Link href={`/movie/${results.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            results.backdrop_path || results.poster_path
          }`}
          alt="photo"
          width={500}
          height={300}
          className="rounded-t-lg hover:opacity-75"
        ></Image>
        <p className="line-clamp-2 text-sm justify-center px-2 pt-2 text-center">
          {results.overview}
        </p>
        <p className="flex items-center mt-2 pb-2 font-bold text-amber-600 truncate p-2">
          {results.original_title || results.name}
        </p>
      </Link>
      <div className="flex items-center mt-2 pb-2 p-2">
        <p className="mr-3">{results.release_date || results.first_air_date}</p>
        <ThumbsUp size={18} />
        <p className="ml-1">{results.vote_count}</p>
      </div>
    </div>
  );
}
