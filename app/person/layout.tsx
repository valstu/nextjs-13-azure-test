import Link from "next/link";

/* eslint-disable @next/next/no-head-element */
async function getData() {
  const res = await fetch(`https://swapi.dev/api/people/`);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  return res.json();
}

export default async function PersonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await getData();
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <nav style={{ display: "flex", flexDirection: "column" }}>
        {data.results.map((i: any) => (
          <Link
            key={i.name}
            href={`/person/${i.url.split("/")[i.url.split("/").length - 2]}`}
          >
            {i.name}
          </Link>
        ))}
      </nav>
      <div>{children}</div>
    </div>
  );
}
