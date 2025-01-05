"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBox() {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/search/${search}`);
  };
  return (
    <form onSubmit={handleSubmit} className="max-w-6xl mx-auto flex mt-4">
      <input
        type="text"
        placeholder="Search"
        className="w-full bg-transparent h-14 placeholder-slate-600 mr-4 outline-none"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        className="text-white font-semibold bg-amber-600 px-4 rounded-xl disabled:text-gray-600 disabled:bg-slate-800"
        disabled={search === ""}
      >
        Search
      </button>
    </form>
  );
}
