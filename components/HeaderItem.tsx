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
    <Link href={address} className="flex gap-1 items-center">
      <Icon size={20} />
      <h1 className="hidden sm:inline">{title}</h1>
    </Link>
  );
}
