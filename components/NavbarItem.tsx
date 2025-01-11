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
      href={`/?genre=${params}`}
      className={`hover:font-semibold ${
        genre === params
          ? "font-bold text-amber-600 underline underline-offset-8 decoration-2 decoration-amber-600"
          : ""
      }`}
    >
      <p>{title}</p>
    </Link>
  );
}
