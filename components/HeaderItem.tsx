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
      className="flex text-sm hover:text-amber-600 hover:font-semibold"
    >
      <Icon size={20} />
      <h2 className="hidden sm:inline">{title}</h2>
    </Link>
  );
}
