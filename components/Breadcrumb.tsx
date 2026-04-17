import Link from "next/link";
import { breadcrumbSchema, jsonLd } from "@/lib/schema";

const ACCENT = "#D4A010";

export type BreadcrumbItem = { name: string; href?: string };

/**
 * Visual breadcrumb nav + matching JSON-LD emitter. One component = one source
 * of truth per page. Render directly under <SiteNav /> on every non-home page.
 *
 *   <Breadcrumb items={[
 *     { name: "Home", href: "/" },
 *     { name: "Services", href: "/services" },
 *     { name: "Wheat Pasting" },  // last crumb has no href
 *   ]} />
 */
export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbSchema(items)) }}
      />
      <nav
        aria-label="Breadcrumb"
        className="px-5 sm:px-8 md:px-12 lg:px-16 pt-5 pb-2"
      >
        <ol
          className="max-w-[1200px] mx-auto flex flex-wrap items-center gap-2 font-mono text-[10px] tracking-[0.22em] uppercase m-0 p-0 list-none"
          style={{ color: "rgba(0,0,0,0.55)" }}
        >
          {items.map((item, i) => {
            const isLast = i === items.length - 1;
            return (
              <li key={`${item.name}-${i}`} className="flex items-center gap-2">
                {!isLast && item.href ? (
                  <Link
                    href={item.href}
                    className="no-underline hover:underline"
                    style={{ color: ACCENT, textDecorationColor: ACCENT }}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <span aria-current={isLast ? "page" : undefined} style={{ color: "rgba(0,0,0,0.55)" }}>
                    {item.name}
                  </span>
                )}
                {!isLast && (
                  <span aria-hidden className="select-none" style={{ color: "rgba(0,0,0,0.52)" }}>
                    ›
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
