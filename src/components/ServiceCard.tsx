"use client";

import Link from "next/link";
import { trackServiceCard } from "@/lib/analytics";

type Props = {
  href: string;
  icon: string;
  title: string;
  description: string;
  variant?: "emergency" | "semi" | "normal";
};

export default function ServiceCard({
  href,
  icon,
  title,
  description,
  variant = "normal",
}: Props) {
  const borderColor =
    variant === "emergency"
      ? "border-emergency"
      : variant === "semi"
        ? "border-primary-dark"
        : "border-border";

  const bgHover =
    variant === "emergency"
      ? "hover:bg-red-50"
      : variant === "semi"
        ? "hover:bg-primary-light"
        : "hover:bg-gray-50";

  return (
    <Link
      href={href}
      onClick={() => trackServiceCard(title)}
      className={`block rounded-xl border-2 ${borderColor} ${bgHover} p-6 transition-colors`}
    >
      <span className="mb-3 block text-3xl" aria-hidden="true">
        {icon}
      </span>
      <h3 className="mb-2 text-lg font-bold">{title}</h3>
      <p className="text-sm text-muted">{description}</p>
      <span className="mt-3 inline-block text-sm font-medium text-accent">
        詳しく見る →
      </span>
    </Link>
  );
}
