"use client"

import { usePathname } from "next/navigation";
import Link from "next/link";
import styled from "styled-components";

const Navbar = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #F9F9F9;
`;

const Logo = styled.div`
  width: 40px;
  height: 40px;
  background-color: black;
`;

const RoutesContainer = styled.div`
  display: flex;

    a {
      text-decoration: none;
      color: black;

      &:hover {
        text-decoration: underline;
      }
    }
`;


const Nav = () => {
  const path = usePathname().slice(1);

  return (
    <Navbar>
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
    </Navbar>
  )
}

export default Nav;