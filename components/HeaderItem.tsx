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
      className="flex gap-1 hover:text-amber-600 hover:font-semibold"
    >
      <Icon size={20} />
      <p className="hidden md:inline">{title}</p>
    </Link>
  );
}
