"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { ReactNode } from "react";

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
      className={`${
        genre === params ? "text-amber-600 font-bold duration-300" : ""
      }`}
      href={`/?genre=${params}`}
    >
      <p>{title}</p>
    </Link>
  );
}
