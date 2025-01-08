"use client";
import { SearchIcon, X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Searchbox() {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/search/${search}`);
  };
  const pathName = usePathname();
  const reset = () => {
    setSearch("");
  };
  useEffect(() => {
    pathName === "/" || pathName === "/about" ? setSearch("") : "";
  }, [pathName]);

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center text-sm max-w-6xl mx-auto mt-2 h-8"
    >
      <input
        type="text"
        placeholder="Search movie"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full bg-transparent outline-none"
      />
      <button
        type="button"
        className="text-amber-600 disabled:text-slate-500"
        disabled={search === ""}
      >
        <X onClick={reset} size={18} />
      </button>
      <button
        className="text-amber-600 disabled:text-slate-500"
        disabled={search === ""}
      >
        <SearchIcon size={18} />
      </button>
    </form>
  );
}
