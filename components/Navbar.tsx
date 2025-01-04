import React from "react";
import NavbarItem from "./NavbarItem";

export default function Navbar() {
  return (
    <div className="flex justify-center gap-4 p-4 bg-amber-600 mt-2">
      <NavbarItem title={"Trending"} param={"fetchTrending"} />
      <NavbarItem title={"Top Rated"} param={"fetchTopRated"} />
    </div>
  );
}
