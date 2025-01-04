"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";

export default function NavbarItem({
  title,
  param,
}: {
  title: string;
  param: string;
}) {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");
  return (
    <div>
      <Link
        href={`/?genre=${param}`}
        className={`hover:text-slate-900 font-semibold ${
          genre === param
            ? "underline underline-offset-8 decoration-4 decoration-slate-900"
            : ""
        }`}
      >
        {title}
      </Link>
    </div>
  );
}
