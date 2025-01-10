"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";

export default function NavbarItem({
  title,
  params,
}: {
  title: string;
  params: string;
}) {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");
  return (
    <Link
      className={`hover:font-semibold ${
        genre === params ? "font-bold text-amber-600 duration-300" : ""
      }`}
      href={`/?genre=${params}`}
    >
      <h3>{title}</h3>
    </Link>
  );
}
