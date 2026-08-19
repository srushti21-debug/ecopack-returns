import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "EcoPack – Packaging Return & Recycling Management" },
      {
        name: "description",
        content:
          "EcoPack helps customers return used e-commerce packaging so it can be reused or recycled. Schedule a return, track it, and cut packaging waste.",
      },
      { property: "og:title", content: "EcoPack – Return. Reuse. Recycle." },
      {
        property: "og:description",
        content:
          "A packaging return and recycling management system for e-commerce. Return used boxes, track your impact, reduce waste.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

// The deliverable is the plain static site in /public/site (HTML + CSS + JS only,
// copy it straight into /var/www/html/). This route just previews it.
function Index() {
  return (
    <iframe
      src="/site/index.html"
      title="EcoPack static website preview"
      className="h-screen w-screen border-0"
    />
  );
}
