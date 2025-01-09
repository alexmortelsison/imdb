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
      className="flex hover:text-amber-600 items-center gap-1 hover:font-semibold"
    >
      <Icon size={20} />
      <p>{title}</p>
    </Link>
  );
}
