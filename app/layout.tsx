import type { Metadata } from "next";
import Nav from "components/Nav";

import "styles/reset.css";

export const metadata: Metadata = {
  title: "Jacob Rhoton",
  description:
    "I'm a software engineer from Denver, Colorado and this is my humble portfolio site.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Nav />
      <body>{children}</body>
    </html>
  );
}
