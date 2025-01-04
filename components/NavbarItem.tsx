"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";
import { ReactNode } from "react";

export default function NavbarItem({
  title,
  param,
}: {
  title: string;
  param: ReactNode;
}) {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");
  return (
    <Link
      className={`hover:font-semibold gap-4 ${
        genre === param
          ? "underline underline-offset-8 decoration-2 decoration-slate-800"
          : ""
      }`}
      href={`/?genre=${param}`}
    >
      {title}
    </Link>
  );
}
