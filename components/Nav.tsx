"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import styled from "styled-components";

const Navbar = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
`;

const Logo = styled.div`
  width: 40px;
  height: 40px;
  background-color: black;
`;

const RoutesContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const NavItems = styled.div`
  display: flex;
  padding: 1rem;
  justify-content: space-between;
  align-items: center;
  // background-color: #f9f9f9;
  background-color: red;
`;

const Nav = () => {
  const path = usePathname().slice(1);

  return (
    <Navbar>
      <NavItems>
        <Link href="/">
          <Logo />
        </Link>
        <RoutesContainer>
          <Link href="/about">About</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
          {/* <Link href="/resume.pdf" target="_blank">Resume</Link> */}
        </RoutesContainer>
      </NavItems>
    </Navbar>
  );
};

export default Nav;
