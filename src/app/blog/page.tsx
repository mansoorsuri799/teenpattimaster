import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { BLOGS, ROUTES, SITE_NAME, SITE_ORIGIN } from "@/lib/site";

export const metadata: Metadata = {
  title: "Teen Patti Master Guides",
  description:
    "Teen Patti Master guides people search in Pakistan: is it real, login and password recovery, bonuses, and table tips.",
  alternates: { canonical: `${SITE_ORIGIN}${ROUTES.blog}` },
  openGraph: {
    title: "Teen Patti Master Guides",
    description: "Safety, login, bonuses, and table tips for Teen Patti Master in Pakistan.",
    url: `${SITE_ORIGIN}${ROUTES.blog}`,
    siteName: SITE_NAME,
    type: "website",
  },
};

export default function Blog() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Blog", href: ROUTES.blog }]} />
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-accent">Teen Patti Master guides worth a search</h1>
      <p className="text-gray-300 mb-10 text-lg">
        Four posts, four intents. Deposit and withdrawal already have their own pages, so they are not repeated here as blogs.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {BLOGS.map((post, index) => (
          <article
            key={post.slug}
            className={`bg-secondary px-8 py-8 rounded-lg border-2 ${index === 0 ? "border-accent" : "border-gray-700 hover:border-accent"}`}
          >
            {index === 0 && (
              <div className="inline-block bg-accent text-primary text-xs font-bold px-3 py-1 rounded-full mb-3">
                Most searched
              </div>
            )}
            <h2 className="text-2xl font-bold mb-4 text-white">{post.title}</h2>
            <p className="text-gray-300 mb-4">{post.description}</p>
            <p className="text-sm text-gray-400 mb-4">5 September 2026 · {post.readMins} min read</p>
            <Link href={`${ROUTES.blog}/${post.slug}`} className="text-accent hover:underline font-semibold">
              Read the guide →
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
