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
        genre === params ? "underline underline-offset-8 decoration-2" : ""
      }`}
      href={`/?genre=${params}`}
    >
      <p>{title}</p>
    </Link>
  );
}
