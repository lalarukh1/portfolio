"use client";

import { useEffect, useRef, useState } from "react";

type TocItem = {
  id: string;
  label: string;
  level: 0 | 1;
};

type Props = {
  items: TocItem[];
};

export default function TableOfContents({ items }: Props) {
  const [activeId, setActiveId] = useState<string>("");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const headingElements = items
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "0px 0px -70% 0px", threshold: 0 }
    );

    headingElements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, [items]);

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav aria-label="Table of contents" className="hidden xl:block pt-16 self-start sticky top-12">
      <div>
        <p className="text-xs uppercase tracking-widest text-muted mb-5 font-medium">
          Contents
        </p>
        <ul className="space-y-1">
          {items.map(({ id, label, level }) => (
            <li key={id}>
              <button
                onClick={() => handleClick(id)}
                className={[
                  "text-left w-full leading-snug transition-colors duration-150 cursor-pointer",
                  level === 1 ? "pl-3 text-xs py-0.5" : "text-xs py-0.5",
                  activeId === id
                    ? "text-foreground"
                    : "text-muted hover:text-foreground",
                ].join(" ")}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
