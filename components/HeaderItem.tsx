import Link from "next/link";
import React from "react";

export default function HeaderItem({
  title,
  address,
  Icon,
}: {
  title: string;
  address: string;
  Icon: React.ComponentType<{ size: number }>;
}) {
  return (
    <Link
      href={address}
      className="text-sm items-center hover:text-amber-600 hover:font-semibold"
    >
      <p className="flex gap-1">
        <Icon size={20} />
        <span className="hidden md:inline">{title}</span>
      </p>
    </Link>
  );
}
