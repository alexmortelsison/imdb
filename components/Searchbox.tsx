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
    pathName === "/" || "/about" ? setSearch("") : "";
  }, [pathName]);
  return (
    <form onSubmit={handleSubmit} className="flex h-8 max-w-6xl mx-auto mb-4">
      <input
        type="text"
        placeholder="Search movies"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full bg-transparent outline-none"
      />
      <button
        type="button"
        className="text-amber-600 disabled:text-slate-500"
        disabled={search === ""}
        onClick={reset}
      >
        <X size={20} />
      </button>
      <button
        type="submit"
        className="text-amber-600 disabled:text-slate-500"
        disabled={search === ""}
      >
        <SearchIcon size={20} />
      </button>
    </form>
  );
}
