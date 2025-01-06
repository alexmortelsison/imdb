"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function Searchbox() {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/search/${search}`);
  };
  return (
    <form className="flex max-w-6xl mx-auto mt-4" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full h-14 bg-transparent outline-none"
      />
      <button
        className="bg-amber-600 px-2 py-1 rounded-lg disabled:bg-slate-600 disabled:text-slate-400"
        disabled={search === ""}
      >
        Search
      </button>
    </form>
  );
}
