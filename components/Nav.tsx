"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import style from "./Nav.module.css";

const Nav = () => {
  const path = usePathname().slice(1);

  return (
    <div className={style.navContainer}>
      <div className={style.nav}>
        <Link href="/">
          <div className={style.logo} />
        </Link>
        <div className={style.navItems}>
          <Link href="/about">About</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
          {/* <Link href="/resume.pdf" target="_blank">Resume</Link> */}
        </div>
      </div>
    </div>
  );
};

export default Nav;
