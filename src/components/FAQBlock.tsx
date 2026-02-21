"use client";

import { useState } from "react";
import Link from "next/link";
import { faqSchema } from "@/lib/schema";

type FAQItem = {
  question: string;
  answer: string;
};

type Props = {
  items: FAQItem[];
  showLink?: boolean;
};

function FAQAccordion({ item }: { item: FAQItem }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-border">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-4 text-left"
      >
        <span className="pr-4 font-medium">Q. {item.question}</span>
        <span className="shrink-0 text-xl text-muted">
          {isOpen ? "−" : "+"}
        </span>
      </button>
      {isOpen && (
        <div className="pb-4 text-sm text-muted">
          A. {item.answer}
        </div>
      )}
    </div>
  );
}

export default function FAQBlock({ items, showLink = true }: Props) {
  const schema = faqSchema(items);

  return (
    <section className="py-12">
      <div className="mx-auto max-w-3xl px-4">
        <h2 className="mb-8 text-center text-2xl font-bold">よくある質問</h2>
        <div>
          {items.map((item) => (
            <FAQAccordion key={item.question} item={item} />
          ))}
        </div>
        {showLink && (
          <div className="mt-6 text-center">
            <Link
              href="/faq/"
              className="text-accent underline hover:opacity-80"
            >
              すべてのよくある質問を見る →
            </Link>
          </div>
        )}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </div>
    </section>
  );
}
