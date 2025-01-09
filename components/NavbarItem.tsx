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
      className={`hover:font-semibold tracking-tighter ${
        genre === params ? "text-amber-600 font-bold" : ""
      }`}
      href={`/?genre=${params}`}
    >
      <p>{title}</p>
    </Link>
  );
}
