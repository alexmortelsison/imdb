"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { ReactNode } from "react";

export default function NavbarItem({
  title,
  params,
}: {
  title: string;
  params: ReactNode;
}) {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");
  return (
    <Link
      className={`hover:font-semibold ${
        genre === params
          ? "underline underline-offset-8 decoration-2 decoration-slate-900"
          : ""
      }`}
      href={`/?genre=${params}`}
    >
      <h1>{title}</h1>
    </Link>
  );
}
