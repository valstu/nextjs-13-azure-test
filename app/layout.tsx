/* eslint-disable @next/next/no-head-element */

import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head></head>

      <body>
        <nav
          style={{
            display: "flex",
            borderBottom: "1px solid black",
            padding: "10px",
            margin: 0,
            flexDirection: "column",
          }}
        >
          <p>Testing Next.js 13</p>
          <div style={{ display: "flex", flexDirection: "row", gap: 10 }}>
            <Link href="/">Home</Link>
            <Link href="/person">Persons</Link>
          </div>
        </nav>
        <div style={{ padding: 10 }}>{children}</div>
      </body>
    </html>
  );
}
