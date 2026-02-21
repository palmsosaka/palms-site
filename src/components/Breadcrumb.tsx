import Link from "next/link";
import { breadcrumbSchema } from "@/lib/schema";

type BreadcrumbItem = {
  name: string;
  url: string;
};

type Props = {
  items: BreadcrumbItem[];
};

export default function Breadcrumb({ items }: Props) {
  const allItems = [{ name: "トップ", url: "/" }, ...items];
  const schema = breadcrumbSchema(allItems);

  return (
    <nav className="bg-gray-50 px-4 py-2" aria-label="パンくずリスト">
      <div className="mx-auto max-w-6xl">
        <ol className="flex flex-wrap items-center gap-1 text-xs text-muted">
          {allItems.map((item, index) => (
            <li key={item.url} className="flex items-center gap-1">
              {index > 0 && <span>/</span>}
              {index === allItems.length - 1 ? (
                <span className="text-foreground">{item.name}</span>
              ) : (
                <Link href={item.url} className="hover:text-accent">
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </nav>
  );
}
