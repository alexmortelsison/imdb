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
    router.push("");
  };
  useEffect(() => {
    pathName === "/" || "/about" ? setSearch("") : "";
  }, [pathName]);
  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-6xl mx-auto flex tracking-tighter"
    >
      <input
        type="text"
        placeholder="Search movies"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="bg-transparent outline-none w-full h-8 text-sm"
      />
      <button
        type="button"
        className="text-amber-600 disabled:text-slate-500 cursor-pointer disabled:cursor-default"
        onClick={reset}
        disabled={search === ""}
      >
        <X size={18} />
      </button>
      <button
        type="submit"
        className="text-amber-600 disabled:text-slate-500"
        disabled={search === ""}
      >
        <SearchIcon size={18} />
      </button>
    </form>
  );
}
