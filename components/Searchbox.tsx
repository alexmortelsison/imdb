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
    router.push("/");
  };
  useEffect(() => {
    pathName === "/" || "/about" ? setSearch("") : "";
  }, [pathName]);
  return (
    <form
      onSubmit={handleSubmit}
      className="flex max-w-6xl mx-auto text-sm mt-4 px-6 lg:px-0"
    >
      <input
        type="text"
        placeholder="Search movies"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full bg-transparent outline-none h-8"
      />
      <button
        type="button"
        onClick={reset}
        className="text-amber-600 disabled:text-slate-600"
        disabled={search === ""}
      >
        <X size={16} onClick={reset} />
      </button>
      <button
        type="submit"
        className="text-amber-600 disabled:text-slate-600"
        disabled={search === ""}
      >
        <SearchIcon size={16} />
      </button>
    </form>
  );
}
