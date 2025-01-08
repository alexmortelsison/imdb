import React from "react";
import NavbarItem from "./NavbarItem";

export default function Navbar() {
  return (
    <div className="flex gap-4 justify-center mt-2 bg-amber-600 p-4">
      <NavbarItem title={"Trending"} params={"fetchTrending"} />
      <NavbarItem title={"Top Rated"} params={"fetchTopRated"} />
    </div>
  );
}
