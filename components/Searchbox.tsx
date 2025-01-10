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
      className="max-w-6xl mx-auto text-sm mt-4 flex px-4"
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
        disabled={search === ""}
        onClick={reset}
        className="cursor-pointer"
      >
        <X size={18} className="text-amber-600 disabled:text-slate-600" />
      </button>
      <button type="submit" className="cursor-pointer">
        <SearchIcon
          size={18}
          className="text-amber-600 disabled:text-slate-600"
        />
      </button>
    </form>
  );
}
