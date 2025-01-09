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
      className="max-w-6xl mx-auto flex my-4
    "
    >
      <input
        type="text"
        placeholder="Search movies"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full bg-transparent outline-none"
      />
      <button type="button" onClick={reset}>
        <X />
      </button>
      <button type="submit">
        <SearchIcon />
      </button>
    </form>
  );
}
