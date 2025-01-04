import Link from "next/link";
import React from "react";
import NavbarItem from "./NavbarItem";

export default function Navbar() {
  return (
    <div className="flex gap-4 justify-center p-4 bg-amber-600 text-white">
      <NavbarItem title={"Trending"} param={"fetchTrending"} />
      <NavbarItem title={"Top Rated"} param={"fetchTopRated"} />
    </div>
  );
}
