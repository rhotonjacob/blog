import type { Metadata } from "next";
import Header from "components/Header";
import Footer from "components/Footer";

import "styles/reset.css";
import "styles/globals.scss";

export const metadata: Metadata = {
  title: "Jacob Rhoton",
  description:
    "I'm a software engineer from Denver, Colorado and this is my humble portfolio site.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/rpt0qay.css" />
      </head>
      <body style={{ position: "relative" }}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
