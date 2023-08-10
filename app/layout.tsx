import type { Metadata } from "next";
import Header from "components/Header";

import "styles/reset.css";
import "styles/globals.scss";

import style from "./layout.module.css";

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
      <body>
        <Header />
        <main>{children}</main>
        <footer className={style.footer}></footer>
      </body>
    </html>
  );
}
